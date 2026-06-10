// Week 22 Training Plan — Phase 3, Block 2, Week 1
// Converted from "Week 22 Training plan.md" (Kinyoubi). This is the schema
// she'll eventually emit alongside the markdown plan.
window.PLAN = {
  week: 22,
  phase: "Phase 3, Block 2, Week 1: Consolidation & Infrastructure",
  theme: "Protect what you've built. Don't chase load until the pattern owns you.",
  cueCards: {
    deadlift: "Shins to bar. Pull slack. Weight to feet. Then pull.",
    squat: "Leg press the floor. Glutes at top. Spread the floor in the hole."
  },
  lowerWarmup: {
    name: "Lower Warmup Protocol",
    note: "Before barbell warmups. ~5 min total.",
    items: [
      "Banded lateral walks — 2×15 each direction (band above knees)",
      "Banded clamshells — 2×12 each side",
      "BW squat, band above knees — 1×10 (band stays taut)"
    ]
  },
  sessions: [
    {
      id: "upper-a",
      date: "2026-06-08",
      name: "Upper A — Bench / Row Volume",
      exercises: [
        {
          name: "BB Bench Press",
          warmup: ["40kg × 5", "55kg × 3"],
          weight: 67.5, unit: "kg", sets: 4, reps: 8,
          rpe: true, mainLift: true,
          note: "HOLD. Consolidate. RPE ≤7 on last set opens 70kg for W23."
        },
        {
          name: "BB Bent-Over Row",
          warmup: ["40kg × 5", "50kg × 3"],
          weight: 57.5, unit: "kg", sets: 4, reps: 8,
          rpe: true, mainLift: true,
          note: "Bicep tendon watch — any twinge on set 1, drop to 55kg."
        },
        { name: "DB Incline Press", weight: 35, unit: "kg", sets: 3, reps: 10 },
        { name: "Cable Face Pull", weight: 22.5, unit: "kg", sets: 3, reps: 12 },
        { name: "DB Lateral Raise", weight: 6, unit: "kg/hand", sets: 3, reps: 12, note: "Slow eccentric." }
      ]
    },
    {
      id: "lower-a",
      date: "2026-06-09",
      name: "Lower A — Squat Volume",
      lowerWarmup: true,
      cueCard: "squat",
      exercises: [
        {
          name: "BB Back Squat",
          warmup: ["bar × 5", "40kg × 5", "50kg × 3"],
          weight: 60, unit: "kg", sets: 3, reps: "6–8",
          rpe: true, mainLift: true, film: "all working sets — front 45°",
          note: "HOLD. Valgus correction > load. Cut-before-cave: note your stop-rep. Cues: leg press the floor, glute squeeze at top."
        },
        { name: "DB RDL", weight: 35, unit: "kg", sets: 3, reps: 10 },
        { name: "Leg Press", weight: 110, unit: "kg", sets: 3, reps: 10 },
        { name: "Lying Leg Curl", weight: 27, unit: "kg", sets: 3, reps: 10, note: "Standardise the weight — log what you actually use." },
        { name: "Cable Pull-Through", weight: 41, unit: "kg", sets: 3, reps: 12 }
      ]
    },
    {
      id: "core-a",
      date: "2026-06-10",
      name: "Core Mini-Session A — Anti-Extension / Anti-Rotation",
      note: "~10 min. After work, before dinner. Infrastructure, not a workout.",
      exercises: [
        { name: "Deadbug", weight: "BW", sets: 2, reps: "10/side", note: "Exhale hard as limbs extend. Lower back pressed to floor." },
        { name: "Plank", weight: "BW", sets: 2, reps: "45s", note: "Hollow body: tuck pelvis, ribs down, glutes on. Form break = stop." },
        { name: "Pallof Press", weight: "band", sets: 2, reps: "10/side", note: "Resist rotation. Straight arms, tall posture." }
      ]
    },
    {
      id: "upper-b",
      date: "2026-06-11",
      name: "Upper B — OHP / Pull Volume",
      exercises: [
        {
          name: "BB Overhead Press",
          warmup: ["bar × 5", "25kg × 3", "30kg × 2", "35kg × 1"],
          weight: 37.5, unit: "kg", sets: 3, reps: 8,
          rpe: true, mainLift: true,
          note: "HOLD for consolidation. RPE ≤7 on last set opens 40kg for W23."
        },
        { name: "Lat Pulldown", weight: 51, unit: "kg", sets: 4, reps: 10 },
        { name: "Cable Tricep Pushdown", weight: 44, unit: "kg", sets: 3, reps: 12 },
        {
          name: "DB Hammer Curl",
          warmup: ["7.5kg/hand × 8 — MANDATORY"],
          weight: 10, unit: "kg/hand", sets: 3, reps: 10,
          note: "HOLD. No progression. Tendon watch."
        },
        { name: "DB Lateral Raise", weight: 6, unit: "kg/hand", sets: 3, reps: 10 },
        { name: "Cable Rear Delt Fly", weight: 14, unit: "kg", sets: 3, reps: 12 }
      ]
    },
    {
      id: "lower-b",
      date: "2026-06-12",
      name: "Lower B — Deadlift + Squat Touch",
      lowerWarmup: true,
      cueCard: "deadlift",
      exercises: [
        {
          name: "BB Deadlift",
          warmup: ["bar × 5 — shins to bar + pull slack", "40kg × 3", "50kg × 2"],
          weight: 60, unit: "kg", sets: 3, reps: 8,
          rpe: true, mainLift: true, film: "set 2 — side angle",
          note: "HOLD. Dead-stop every rep. Shins to bar, pull slack until weight shifts to feet, then pull. Read cue card before each set."
        },
        {
          name: "BB Back Squat — touch",
          weight: 60, unit: "kg", sets: 2, reps: 6,
          film: "for between-session review",
          note: "Banded above knees. Focus: band stays taut."
        },
        { name: "DB RDL", weight: 35, unit: "kg", sets: 2, reps: 10 },
        { name: "Cable Pull-Through", weight: 41, unit: "kg", sets: 2, reps: 12 },
        { name: "Calf Raise", weight: 10, unit: "kg/hand", sets: 3, reps: 12, note: "Watch left heel/Achilles." },
        { name: "Lying Knee Raise", weight: "BW", sets: 2, reps: 10 }
      ]
    },
    {
      id: "core-b",
      date: "2026-06-13",
      name: "Core Mini-Session B + LISS Walk",
      note: "Core mid-morning, before the walk. Walk 30–45 min, 3,500+ steps. Rain contingency: indoor.",
      exercises: [
        { name: "Side Plank", weight: "BW", sets: 2, reps: "20s/side", note: "Straight line head to heels." },
        { name: "Plank", weight: "BW", sets: 1, reps: "max hold", note: "Target 90s — stop when form breaks. No sag." },
        { name: "Deadbug", weight: "BW", sets: 1, reps: "10/side" },
        { name: "Bird Dog", weight: "BW", sets: 1, reps: "8/side", note: "Opposite arm/leg, hold 3s each." }
      ]
    }
  ]
};
