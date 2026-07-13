window.PLAN =
{
  "week": 27,
  "phase": "Phase 3, Block 3, Week 2: Reconciliation + Form-Gated Progression",
  "theme": "Reconcile prescription with actual execution. Hold squat at 62.5kg pending physio clearance; own the unplanned 75kg deadlift; progress only lat pulldown. Tendon rehabilitation remains load-gated.",
  "cueCards": {
    "deadlift": "Hinge first. Grip the bar. Shins touch — STOP. Pull slack. Push the floor. Sit BACK down on the eccentric. Oranges in armpits — lats tight.",
    "squat": "Right foot external rotation 15-20 deg. Spread the floor. Chest up out of the hole. Sit BACK down — controlled descent.",
    "ohp": "Glutes tight. Bar over mid-foot. Press straight up — head through at the top.",
    "row": "Brace. Pull to the lower ribs. Squeeze the shoulder blades together. Control the eccentric — don't let it drop."
  },
  "lowerWarmup": {
    "name": "Lower Warmup Protocol",
    "note": "Before barbell warmups. Activation ~5 min + thoracic mobility ~2 min. Non-negotiable — this is the physio correction delivery vehicle.",
    "items": [
      "Banded lateral walks — 2x15 each direction (band above knees)",
      "Banded clamshells — 2x12 each side",
      "BW squat, band above knees — 1x10 (band stays taut — slack = caving)",
      "Thoracic: Cat-cow — 10 reps slow, emphasise the cow/extension phase (open the chest)",
      "Thoracic: Foam-roller extensions — 5 x 5s hold (roller at mid-back, arms crossed, extend over it)",
      "Thoracic: Band pull-aparts — 1x15 light band (also between deadlift sets)"
    ]
  },
  "sessions": [
    {
      "id": "upper-a",
      "date": "2026-07-13",
      "name": "Upper A — Bench / Row Volume",
      "cueCard": "row",
      "exercises": [
        {
          "name": "BB Bench Press",
          "warmup": [
            "40kg x 5",
            "55kg x 3"
          ],
          "weight": 70,
          "unit": "kg",
          "sets": 4,
          "reps": 8,
          "rpe": true,
          "mainLift": true,
          "note": "HOLD 70kg — W26 finished at RPE 9. No progression until ≤8 without grind."
        },
        {
          "name": "BB Bent-Over Row",
          "warmup": [
            "40kg x 5",
            "50kg x 3"
          ],
          "weight": 62.5,
          "unit": "kg",
          "sets": 4,
          "reps": 8,
          "rpe": true,
          "mainLift": true,
          "note": "HOLD 62.5kg — newly progressed, W26 RPE 8. Bicep tendon has remained silent on rows; continue monitoring."
        },
        {
          "name": "DB Incline Press",
          "weight": 40,
          "unit": "kg",
          "sets": 3,
          "reps": 10,
          "note": "HOLD 40kg — own three clean sets before progression."
        },
        {
          "name": "Cable Face Pull",
          "weight": 32,
          "unit": "kg",
          "sets": 3,
          "reps": 12,
          "note": "Mark all sets in app before syncing!"
        },
        {
          "name": "DB Lateral Raise",
          "weight": 7,
          "unit": "kg/hand",
          "sets": 3,
          "reps": 12,
          "note": "Slow eccentric."
        }
      ]
    },
    {
      "id": "lower-a",
      "date": "2026-07-14",
      "name": "Lower A — Squat Volume (Physio-Gated Hold)",
      "lowerWarmup": true,
      "cueCard": "squat",
      "exercises": [
        {
          "name": "BB Back Squat",
          "warmup": [
            "bar x 5",
            "40kg x 5",
            "50kg x 3",
            "55kg x 2"
          ],
          "weight": 62.5,
          "unit": "kg",
          "sets": 4,
          "reps": "8-10",
          "rpe": true,
          "mainLift": true,
          "film": "Set 1 AND Set 3 — side view",
          "note": "HOLD pending physio footage review despite W26 RPE 6. Right foot external rotation 15-20 deg; controlled eccentric; cut-before-cave. If physio clears 65kg before this session, amend the app rather than improvising."
        },
        {
          "name": "DB RDL",
          "weight": 37.5,
          "unit": "kg",
          "sets": 3,
          "reps": 10,
          "note": "Standardise at the demonstrated W26 load. Neutral chin; hinge, not squat."
        },
        {
          "name": "Leg Press",
          "weight": 120,
          "unit": "kg",
          "sets": 3,
          "reps": 10,
          "note": "Restore intended load; W26 110kg was a setup mistake, not a regression."
        },
        {
          "name": "Lying Leg Curl",
          "weight": 36,
          "unit": "kg",
          "sets": 3,
          "reps": 10,
          "note": "HOLD 36kg — W26 final set stopped at 6 reps. Own 3x10 before progression."
        },
        {
          "name": "Cable Pull-Through",
          "weight": 44,
          "unit": "kg",
          "sets": 3,
          "reps": 12
        }
      ]
    },
    {
      "id": "core-a",
      "date": "2026-07-15",
      "name": "Core Mini-Session A — Anti-Rotation + Glute Med",
      "note": "~25 min. After work, before dinner. DO NOT SKIP this week. Planks are mandatory.",
      "exercises": [
        {
          "name": "Dead Bug",
          "weight": "BW",
          "sets": 3,
          "reps": "10/side"
        },
        {
          "name": "Plank",
          "weight": "BW",
          "sets": 3,
          "reps": "60s",
          "note": "3 clean 60s holds. Phase 3 duration target achieved; stop on form break rather than chasing 90s."
        },
        {
          "name": "Pallof Press",
          "weight": "band",
          "sets": 3,
          "reps": "10/side",
          "note": "Anti-rotation. Straight arms, tall posture."
        },
        {
          "name": "Banded Side Walks",
          "weight": "band",
          "sets": 2,
          "reps": "15/side",
          "note": "Glute med. Band above knees."
        },
        {
          "name": "Single-Leg Glute Bridge",
          "weight": "BW",
          "sets": 2,
          "reps": "10/side",
          "note": "Left side focus. Hold 2s at top."
        }
      ]
    },
    {
      "id": "upper-b",
      "date": "2026-07-16",
      "name": "Upper B — OHP / Pull Volume",
      "cueCard": "ohp",
      "exercises": [
        {
          "name": "BB Overhead Press",
          "warmup": [
            "bar x 5",
            "25kg x 3",
            "30kg x 2",
            "35kg x 1"
          ],
          "weight": 40,
          "unit": "kg",
          "sets": 4,
          "reps": 8,
          "rpe": true,
          "mainLift": true,
          "note": "HOLD 40kg — W26 RPE 9. Own the load before 42.5kg."
        },
        {
          "name": "Lat Pulldown",
          "weight": 57,
          "unit": "kg",
          "sets": 4,
          "reps": 10,
          "note": "PROGRESSION from 54kg after W26 10,10,12,12. Target four controlled sets of 8-10."
        },
        {
          "name": "Cable Tricep Pushdown",
          "weight": 50,
          "unit": "kg",
          "sets": 3,
          "reps": 12,
          "note": "Hold actual successful W26 load."
        },
        {
          "name": "DB Hammer Curl",
          "warmup": [
            "4kg/hand x 8"
          ],
          "weight": 6,
          "unit": "kg/hand",
          "sets": 3,
          "reps": 10,
          "note": "TENDON REHAB HOLD. 3s eccentric. Mild sensation still appears on final reps: stop if it becomes pain or increases rep-to-rep. Do not progress until all sets are symptom-free or stably negligible."
        },
        {
          "name": "DB Lateral Raise",
          "weight": 7,
          "unit": "kg/hand",
          "sets": 3,
          "reps": 10
        },
        {
          "name": "Cable Rear Delt Fly",
          "weight": 14,
          "unit": "kg",
          "sets": 3,
          "reps": 12
        }
      ]
    },
    {
      "id": "lower-b",
      "date": "2026-07-17",
      "name": "Lower B — Deadlift Ownership + Squat Touch",
      "lowerWarmup": true,
      "cueCard": "deadlift",
      "note": "Own 75kg deadlift execution. Squat remains frozen pending physio review.",
      "exercises": [
        {
          "name": "BB Deadlift",
          "warmup": [
            "bar x 5",
            "40kg x 3",
            "50kg x 2",
            "60kg x 1",
            "70kg x 1"
          ],
          "weight": 75,
          "unit": "kg",
          "sets": 3,
          "reps": 8,
          "rpe": true,
          "mainLift": true,
          "film": "Set 1 AND Set 3 — side view",
          "note": "HOLD actual W26 load — 75kg x 3x8 at RPE 8. Dead-stop; reversed setup; lats tight; sit BACK on eccentric. No progression until eccentric remains clean through Set 3."
        },
        {
          "name": "BB Back Squat — touch",
          "weight": 70,
          "unit": "kg",
          "sets": 2,
          "reps": 6,
          "film": "1 set — side view",
          "note": "HOLD pending physio footage review. Right foot external rotation; banded; cut-before-cave."
        },
        {
          "name": "DB RDL",
          "weight": 37.5,
          "unit": "kg",
          "sets": 2,
          "reps": 10,
          "note": "Hold actual W26 load; standardise with Lower A."
        },
        {
          "name": "Cable Pull-Through",
          "weight": 44,
          "unit": "kg",
          "sets": 2,
          "reps": 12
        },
        {
          "name": "Calf Raise",
          "weight": 12.5,
          "unit": "kg",
          "sets": 3,
          "reps": 12,
          "note": "Single DB. Watch left heel/Achilles."
        },
        {
          "name": "Lying Knee Raise",
          "weight": "BW",
          "sets": 2,
          "reps": 10
        }
      ]
    },
    {
      "id": "core-b",
      "date": "2026-07-18",
      "name": "Core Mini-Session B — Glute Med + Stability",
      "note": "Saturday/Sunday. ~25 min. DO NOT SKIP. Planks are mandatory.",
      "exercises": [
        {
          "name": "Dead Bug",
          "weight": "BW",
          "sets": 3,
          "reps": "10/side"
        },
        {
          "name": "Plank",
          "weight": "BW",
          "sets": 3,
          "reps": "60s",
          "note": "3 clean 60s holds. Phase 3 duration target achieved; stop on form break rather than chasing 90s."
        },
        {
          "name": "Pallof Press",
          "weight": "band",
          "sets": 3,
          "reps": "10/side"
        },
        {
          "name": "Clamshells",
          "weight": "band",
          "sets": 2,
          "reps": "12/side",
          "note": "Targets glute med. Band above knees."
        },
        {
          "name": "Single-Leg Glute Bridge",
          "weight": "BW",
          "sets": 2,
          "reps": "10/side",
          "note": "Left side focus."
        }
      ]
    }
  ]
};
