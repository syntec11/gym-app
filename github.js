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

    // Existing file needs its sha for update; 404 means create.
    let sha;
    const head = await fetch(`${url}?ref=${branch}`, { headers });
    if (head.ok) sha = (await head.json()).sha;

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
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`GitHub ${res.status}: ${body.slice(0, 200)}`);
    }
    return res.json();
  }
};

function ghB64(str) {
  return btoa(String.fromCharCode(...new TextEncoder().encode(str)));
}
