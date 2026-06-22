// Week 24 Training Plan — Phase 3, Block 2, Week 3: Consolidation
// Converted from "Week 24 Training Plan.md" (Kinyoubi).
// OHP earns its progression (37.5→40kg); everything else holds. Physio appt
// Tue 23 Jun — squat/deadlift/RDL/calf may be modified after; lower sessions
// carry the flag. New OHP cue card surfaced on Upper B.
window.PLAN = {
  week: 24,
  phase: "Phase 3, Block 2, Week 3: Consolidation",
  theme: "Consolidate. OHP gets its progression — everything else holds. The physio (Tue) tells us what the lower body needs. Sleep is the other gym: front-load the protein.",
  cueCards: {
    deadlift: "Hinge first. Grip the bar. Shins touch — STOP. Pull slack. Push the floor.",
    squat: "Spread the floor. Left knee — little toe. Chest up out of the hole.",
    ohp: "Glutes tight. Bar over mid-foot. Press straight up — head through at the top."
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
      date: "2026-06-22",
      name: "Upper A — Bench / Row Volume",
      exercises: [
        {
          name: "BB Bench Press",
          warmup: ["40kg × 5", "55kg × 3"],
          weight: 67.5, unit: "kg", sets: 4, reps: 8,
          rpe: true, mainLift: true,
          note: "Hold — consolidate before 70kg. Log RPE on last set."
        },
        {
          name: "BB Bent-Over Row",
          warmup: ["40kg × 5", "50kg × 3"],
          weight: 60, unit: "kg", sets: 4, reps: 8,
          rpe: true, mainLift: true,
          note: "Confirm progression. Bicep tendon watch — any twinge on set 1, drop to 57.5kg."
        },
        { name: "DB Incline Press", weight: 35, unit: "kg", sets: 3, reps: 10 },
        { name: "Cable Face Pull", weight: 22.5, unit: "kg", sets: 3, reps: 12 },
        { name: "DB Lateral Raise", weight: 6, unit: "kg/hand", sets: 3, reps: 12, note: "Slow eccentric." }
      ]
    },
    {
      id: "lower-a",
      date: "2026-06-23",
      name: "Lower A — Squat Volume",
      lowerWarmup: true,
      cueCard: "squat",
      note: "⚠️ Physio appointment TODAY — squat and lower-body work may be modified. The plan below is the default; if the physio prescribes changes, follow the physio and tell Doyoubi to update the app.",
      exercises: [
        {
          name: "BB Back Squat",
          warmup: ["bar × 5", "40kg × 5", "50kg × 3"],
          weight: 60, unit: "kg", sets: 4, reps: "5–8",
          rpe: true, mainLift: true, film: "working sets — SIDE view",
          note: "HOLD — banded, physio pending. Left-specific cue: push the LEFT knee toward the little toe. Cut-before-cave: stop when left knee drifts, even at rep 5. Log RPE + the rep you stopped at. If physio modifies, follow physio."
        },
        { name: "DB RDL", weight: 35, unit: "kg", sets: 3, reps: 10 },
        { name: "Leg Press", weight: 110, unit: "kg", sets: 3, reps: 10 },
        { name: "Lying Leg Curl", weight: 30, unit: "kg", sets: 3, reps: 10 },
        { name: "Cable Pull-Through", weight: 44, unit: "kg", sets: 3, reps: 12 }
      ]
    },
    {
      id: "core-a",
      date: "2026-06-24",
      name: "Core Mini-Session A — Anti-Rotation + Left Glute Med",
      note: "~10 min. After work, before dinner. Infrastructure, not a workout.",
      exercises: [
        { name: "Dead Bug", weight: "BW", sets: 3, reps: "10/side" },
        { name: "Plank", weight: "BW", sets: 3, reps: "hold", note: "Set 1 max (target 90s); 2 holds." },
        { name: "Pallof Press", weight: "band", sets: 3, reps: "10/side", note: "Anti-rotation. Straight arms, tall posture." },
        { name: "Banded Side Walks", weight: "band", sets: 2, reps: "15/side", note: "Glute med for the left-side deficit. Band above knees." },
        { name: "Single-Leg Glute Bridge", weight: "BW", sets: 2, reps: "10/side", note: "Left side focus. Hold 2s at top." }
      ]
    },
    {
      id: "upper-b",
      date: "2026-06-25",
      name: "Upper B — OHP / Pull Volume",
      cueCard: "ohp",
      exercises: [
        {
          name: "BB Overhead Press",
          warmup: ["bar × 5", "25kg × 3", "30kg × 2", "35kg × 1 — bridge to working weight"],
          weight: 40, unit: "kg", sets: 3, reps: 8,
          rpe: true, mainLift: true,
          note: "✅ PROGRESSION (from 37.5kg). Log RPE — ≤8 holds 40kg for W25; RPE 9–10 → drop back to 37.5kg next session."
        },
        { name: "Lat Pulldown", weight: 54, unit: "kg", sets: 4, reps: 10, note: "Hold at actual W23 load." },
        { name: "Cable Tricep Pushdown", weight: 44, unit: "kg", sets: 3, reps: 12 },
        {
          name: "DB Hammer Curl",
          warmup: ["7.5kg/hand × 8 — MANDATORY"],
          weight: 10, unit: "kg/hand", sets: 3, reps: 10,
          note: "Tendon hold. No progression."
        },
        { name: "DB Lateral Raise", weight: 6, unit: "kg/hand", sets: 3, reps: 10 },
        { name: "Cable Rear Delt Fly", weight: 14, unit: "kg", sets: 3, reps: 12 }
      ]
    },
    {
      id: "lower-b",
      date: "2026-06-26",
      name: "Lower B — Deadlift + Squat Touch",
      lowerWarmup: true,
      cueCard: "deadlift",
      note: "⚠️ Check physio feedback before this session — apply any modifications. Band pull-aparts ×15 between each deadlift set.",
      exercises: [
        {
          name: "BB Deadlift",
          warmup: ["bar × 5 — reversed setup ritual on every rep", "40kg × 3", "50kg × 2"],
          weight: 60, unit: "kg", sets: 3, reps: 8,
          rpe: true, mainLift: true, film: "Set 1 AND Set 3 — side view (fresh vs fatigued)",
          note: "HOLD — pattern ownership. Reversed setup ritual: hinge → grip → shins touch → STOP → pull slack → push floor. Dead-stop between reps. Read cue card before each set. Band pull-aparts ×15 between sets."
        },
        {
          name: "BB Back Squat — touch",
          weight: 60, unit: "kg", sets: 2, reps: 6,
          film: "1 set — side view (valgus check)",
          note: "Banded. Left-specific cue: left knee → little toe."
        },
        { name: "DB RDL", weight: 35, unit: "kg", sets: 2, reps: 10 },
        { name: "Cable Pull-Through", weight: 44, unit: "kg", sets: 2, reps: 12 },
        { name: "Calf Raise", weight: 12.5, unit: "kg", sets: 3, reps: 12, note: "Single DB. Watch left heel/Achilles." },
        { name: "Lying Knee Raise", weight: "BW", sets: 2, reps: 10 }
      ]
    },
    {
      id: "core-b",
      date: "2026-06-27",
      name: "Core Mini-Session B — Left Glute Med",
      note: "Saturday/Sunday. Light session.",
      exercises: [
        { name: "Dead Bug", weight: "BW", sets: 3, reps: "10/side" },
        { name: "Plank", weight: "BW", sets: 3, reps: "hold" },
        { name: "Pallof Press", weight: "band", sets: 3, reps: "10/side" },
        { name: "Clamshells", weight: "band", sets: 2, reps: "12/side", note: "Targets left glute med specifically. Band above knees." },
        { name: "Single-Leg Glute Bridge", weight: "BW", sets: 2, reps: "10/side", note: "Left side focus." }
      ]
    }
  ]
};
