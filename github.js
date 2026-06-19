/* GitHub sync — commits session logs to the private data repo via the
   Contents API. Config (token/owner/repo) lives in localStorage; the token
   should be a fine-grained PAT scoped to ONLY the data repo, contents r/w. */

const GH = {
  cfgKey: "gh-config",

  cfg() {
    try { return JSON.parse(localStorage.getItem(this.cfgKey)) || null; }
    catch { return null; }
  },

  save(c) { localStorage.setItem(this.cfgKey, JSON.stringify(c)); },

  configured() {
    const c = this.cfg();
    return !!(c && c.token && c.owner && c.repo);
  },

  /* Diagnose config problems precisely: bad token vs invisible repo vs
     read-only permission. GitHub returns 404 (not 403) when a token can't
     see a private repo, so a plain error code is useless to the user. */
  async test() {
    const c = this.cfg();
    if (!this.configured()) return "Fill in all three fields first.";
    const headers = {
      "Authorization": `Bearer ${c.token}`,
      "Accept": "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    };
    let res;
    try {
      res = await fetch(`https://api.github.com/repos/${c.owner}/${c.repo}`, { headers });
    } catch {
      return "Network error — no signal?";
    }
    if (res.status === 401) return "❌ Token rejected (401). It's invalid, expired, or pasted incompletely — it should start with github_pat_.";
    if (res.status === 404) return `❌ Token can't see ${c.owner}/${c.repo} (404). Check: exact spelling of username + repo, AND that the token's "Repository access" is set to "Only select repositories" with ${c.repo} actually selected.`;
    if (!res.ok) return `❌ GitHub returned ${res.status}.`;
    const repo = await res.json();
    if (!repo.permissions || !repo.permissions.push) {
      return `⚠️ Token can SEE ${c.owner}/${c.repo} but can't write to it. Set the token's Contents permission to "Read and write".`;
    }
    return `✅ Connected — read/write access to ${c.owner}/${c.repo} confirmed.`;
  },

  /* Read a JSON file from the data repo; null if absent or unreachable. */
  async getFile(path) {
    const c = this.cfg();
    if (!this.configured()) return null;
    const branch = c.branch || "main";
    const res = await fetch(
      `https://api.github.com/repos/${c.owner}/${c.repo}/contents/${path}?ref=${branch}`,
      {
        cache: "no-store",
        headers: {
          "Authorization": `Bearer ${c.token}`,
          "Accept": "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28"
        }
      }
    );
    if (!res.ok) return null;
    const j = await res.json();
    const bytes = Uint8Array.from(atob(j.content.replace(/\s/g, "")), (ch) => ch.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  },

  async putFile(path, content, message) {
    const c = this.cfg();
    if (!this.configured()) throw new Error("GitHub sync not configured");
    const branch = c.branch || "main";
    const url = `https://api.github.com/repos/${c.owner}/${c.repo}/contents/${path}`;
    const headers = {
      "Authorization": `Bearer ${c.token}`,
      "Accept": "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    };

    // Re-fetch the sha and PUT, retrying on 409/422 — two rapid writes to the
    // same file (e.g. moving two sessions in a row) can race because the sha
    // we read goes stale before the write lands. Re-read and try again.
    let lastErr;
    for (let attempt = 0; attempt < 4; attempt++) {
      let sha;
      const head = await fetch(`${url}?ref=${branch}`, { headers, cache: "no-store" });
      if (head.ok) sha = (await head.json()).sha; // else 404 = creating

      const res = await fetch(url, {
        method: "PUT",
        headers,
        body: JSON.stringify({
          message,
          content: ghB64(content),
          branch,
          ...(sha ? { sha } : {})
        })
      });
      if (res.ok) return res.json();

      const body = await res.text();
      // 409 conflict / 422 stale-sha → back off briefly and retry with fresh sha.
      if ((res.status === 409 || res.status === 422) && attempt < 3) {
        lastErr = `GitHub ${res.status}: ${body.slice(0, 120)}`;
        await new Promise(r => setTimeout(r, 400 * (attempt + 1)));
        continue;
      }
      throw new Error(`GitHub ${res.status}: ${body.slice(0, 200)}`);
    }
    throw new Error(lastErr || "GitHub put failed after retries");
  }
};

function ghB64(str) {
  return btoa(String.fromCharCode(...new TextEncoder().encode(str)));
}
