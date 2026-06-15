// Week 23 Training Plan — Phase 3, Block 2, Week 2: Pattern Ownership
// Converted from "Week 23 Training Plan.md" (Kinyoubi, post-W22 video review).
// Cue cards + lower warmup updated: reversed deadlift setup, left-specific squat
// cue, new thoracic mobility block. Thoracic items flattened into the warmup
// checklist (renderer is a flat list) and tagged "Thoracic:".
window.PLAN = {
  week: 23,
  phase: "Phase 3, Block 2, Week 2: Pattern Ownership",
  theme: "Protect what you've built. Extend the pattern from Set 1 to every set. No load increases on the big two until the patterns hold.",
  cueCards: {
    deadlift: "Hinge first. Grip the bar. Shins touch — STOP. Pull slack. Push the floor.",
    squat: "Spread the floor. Left knee — little toe. Chest up out of the hole."
  },
  lowerWarmup: {
    name: "Lower Warmup Protocol",
    note: "Before barbell warmups. Activation ~5 min + thoracic mobility ~2 min.",
    items: [
      "Banded lateral walks — 2×15 each direction (band above knees)",
      "Banded clamshells — 2×12 each side",
      "BW squat, band above knees — 1×10 (band stays taut — slack = caving)",
      "Thoracic: Cat-cow — 10 reps slow, emphasise the cow/extension phase (open the chest)",
      "Thoracic: Foam-roller extensions — 5 × 5s hold (roller at mid-back, arms crossed, extend over it)",
      "Thoracic: Band pull-aparts — 1×15 light band (also between deadlift sets)"
    ]
  },
  sessions: [
    {
      id: "upper-a",
      date: "2026-06-15",
      name: "Upper A — Bench / Row Volume",
      exercises: [
        {
          name: "BB Bench Press",
          warmup: ["40kg × 5", "55kg × 3"],
          weight: 67.5, unit: "kg", sets: 4, reps: 8,
          rpe: true, mainLift: true,
          note: "Consolidating. Log RPE on last set."
        },
        {
          name: "BB Bent-Over Row",
          warmup: ["40kg × 5", "50kg × 3"],
          weight: 60, unit: "kg", sets: 4, reps: 8,
          rpe: true, mainLift: true,
          note: "Confirming progression from 57.5kg. Bicep tendon watch — any twinge on set 1, drop to 57.5kg."
        },
        { name: "DB Incline Press", weight: 35, unit: "kg", sets: 3, reps: 10 },
        { name: "Cable Face Pull", weight: 22.5, unit: "kg", sets: 3, reps: 12 },
        { name: "DB Lateral Raise", weight: 6, unit: "kg/hand", sets: 3, reps: 12, note: "Slow eccentric." },
        { name: "Plank", weight: "BW", sets: 3, reps: "hold", note: "Set 1 max (target 90s); 2 holds as long as form holds." }
      ]
    },
    {
      id: "lower-a",
      date: "2026-06-16",
      name: "Lower A — Squat Volume",
      lowerWarmup: true,
      cueCard: "squat",
      exercises: [
        {
          name: "BB Back Squat",
          warmup: ["bar × 5", "40kg × 5", "50kg × 3"],
          weight: 60, unit: "kg", sets: 4, reps: "5–8",
          rpe: true, mainLift: true, film: "working sets — SIDE view (depth + torso angle; front wasn't enough)",
          note: "HOLD — banded. Left-specific cue: push the LEFT knee toward the little toe. Cut-before-cave: stop when left knee drifts, even at rep 5. Log RPE + the rep you stopped at."
        },
        { name: "DB RDL", weight: 35, unit: "kg", sets: 3, reps: 10 },
        { name: "Leg Press", weight: 110, unit: "kg", sets: 3, reps: 10 },
        { name: "Lying Leg Curl", weight: 27, unit: "kg", sets: 3, reps: 10 },
        { name: "Cable Pull-Through", weight: 41, unit: "kg", sets: 3, reps: 12 },
        { name: "Dead Bug", weight: "BW", sets: 3, reps: "10/side" }
      ]
    },
    {
      id: "core-a",
      date: "2026-06-17",
      name: "Core Mini-Session A — Anti-Rotation + Left Glute Med",
      note: "~10 min. After work, before dinner. Infrastructure, not a workout.",
      exercises: [
        { name: "Dead Bug", weight: "BW", sets: 3, reps: "10/side" },
        { name: "Plank", weight: "BW", sets: 3, reps: "hold", note: "Set 1 max (target 90s); 2 holds." },
        { name: "Pallof Press", weight: "band", sets: 3, reps: "10/side", note: "Anti-rotation. Straight arms, tall posture." },
        { name: "Banded Side Walks", weight: "band", sets: 2, reps: "15/side", note: "NEW — glute med accessory for the left-side deficit. Band above knees." },
        { name: "Single-Leg Glute Bridge", weight: "BW", sets: 2, reps: "10/side", note: "NEW — left side focus. Hold 2s at top." }
      ]
    },
    {
      id: "upper-b",
      date: "2026-06-18",
      name: "Upper B — OHP / Pull Volume",
      exercises: [
        {
          name: "BB Overhead Press",
          warmup: ["bar × 5", "25kg × 3", "30kg × 2"],
          weight: 37.5, unit: "kg", sets: 3, reps: 8,
          rpe: true, mainLift: true,
          note: "Hold. Log RPE — ≤7 on all sets opens 40kg for W24."
        },
        { name: "Lat Pulldown", weight: 51, unit: "kg", sets: 4, reps: 10, note: "Progression from 48kg." },
        { name: "Cable Tricep Pushdown", weight: 44, unit: "kg", sets: 3, reps: 12 },
        {
          name: "DB Hammer Curl",
          warmup: ["7.5kg/hand × 8 — MANDATORY"],
          weight: 10, unit: "kg/hand", sets: 3, reps: 10,
          note: "Tendon hold. No progression."
        },
        { name: "DB Lateral Raise", weight: 6, unit: "kg/hand", sets: 3, reps: 10 },
        { name: "Cable Rear Delt Fly", weight: 14, unit: "kg", sets: 3, reps: 12 },
        { name: "Plank", weight: "BW", sets: 3, reps: "hold", note: "Push for 90s on set 1." }
      ]
    },
    {
      id: "lower-b",
      date: "2026-06-19",
      name: "Lower B — Deadlift + Squat Touch",
      lowerWarmup: true,
      cueCard: "deadlift",
      exercises: [
        {
          name: "BB Deadlift",
          warmup: ["bar × 5 — reversed setup ritual on every rep", "40kg × 3", "50kg × 2"],
          weight: 60, unit: "kg", sets: 3, reps: 8,
          rpe: true, mainLift: true, film: "Set 1 AND Set 3 — side view (fresh vs fatigued)",
          note: "Reversed setup ritual: hinge → grip → shins touch → STOP → pull slack → push floor. Dead-stop between reps. Read cue card before each set. Band pull-aparts ×15 between each set."
        },
        {
          name: "BB Back Squat — touch",
          weight: 60, unit: "kg", sets: 2, reps: 6,
          film: "1 set — side view (valgus check)",
          note: "Banded. Left-specific cue: left knee → little toe."
        },
        { name: "DB RDL", weight: 35, unit: "kg", sets: 2, reps: 10 },
        { name: "Cable Pull-Through", weight: 41, unit: "kg", sets: 2, reps: 12 },
        { name: "Calf Raise", weight: 10, unit: "kg/hand", sets: 3, reps: 12, note: "Watch left heel/Achilles." },
        { name: "Dead Bug", weight: "BW", sets: 3, reps: "10/side" },
        { name: "Lying Knee Raise", weight: "BW", sets: 2, reps: 10 }
      ]
    },
    {
      id: "core-b",
      date: "2026-06-20",
      name: "Core Mini-Session B — Left Glute Med",
      note: "Saturday/Sunday. Light session.",
      exercises: [
        { name: "Dead Bug", weight: "BW", sets: 3, reps: "10/side" },
        { name: "Plank", weight: "BW", sets: 3, reps: "hold" },
        { name: "Pallof Press", weight: "band", sets: 3, reps: "10/side" },
        { name: "Clamshells", weight: "band", sets: 2, reps: "12/side", note: "NEW — targets left glute med specifically. Band above knees." },
        { name: "Single-Leg Glute Bridge", weight: "BW", sets: 2, reps: "10/side", note: "NEW — left side focus." }
      ]
    }
  ]
};
