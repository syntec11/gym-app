window.PLAN =
{
  "week": 28,
  "phase": "Diagnostic Bridge Week: Phase 3 Recovery → Phase 4 Transition",
  "theme": "Use reduced training exposure to test recovery without repaying missed sessions. Monday is diagnostic; Tuesday physio and the 24-hour response govern all later work. Every subsequent session may be amended or removed.",
  "cueCards": {
    "deadlift": "Hinge first. Grip the bar. Shins touch — STOP. Pull slack. Push the floor. Sit BACK down on the eccentric. Oranges in armpits — lats tight.",
    "squat": "Right foot external rotation 15-20 deg. Spread the floor. Chest up out of the hole. Sit BACK down — controlled descent.",
    "ohp": "Glutes tight. Bar over mid-foot. Press straight up — head through at the top.",
    "row": "Brace. Pull to the lower ribs. Squeeze the shoulder blades together. Control the eccentric — don't let it drop."
  },
  "lowerWarmup": {
    "name": "Lower Warmup Protocol",
    "note": "Use the physio's live corrections from Tuesday. This existing sequence is provisional until that review; amend the canonical plan before changing it under load.",
    "items": [
      "Banded lateral walks — 2x15 each direction (band above knees)",
      "Banded clamshells — 2x12 each side",
      "BW squat, band above knees — 1x10 (band stays taut — slack = caving)",
      "Thoracic: Cat-cow — 10 reps slow, emphasise extension",
      "Thoracic: Foam-roller extensions — 5 x 5s hold",
      "Thoracic: Band pull-aparts — 1x15 light band"
    ]
  },
  "sessions": [
    {
      "id": "upper-a",
      "date": "2026-07-20",
      "name": "Upper A — Diagnostic Re-Entry",
      "cueCard": "row",
      "note": "TODAY'S DIAGNOSTIC DOSE. RPE 6-7 ceiling; leave ≥3 reps in reserve. No grinders, failure, bonus work or missed-session repayment. Stop if warmups feel disproportionately heavy, coordination is poor, heart rate is unusual, or the good subjective state disappears under load.",
      "exercises": [
        {
          "name": "BB Bench Press",
          "weight": 70,
          "sets": 2,
          "reps": 8,
          "unit": "kg",
          "warmup": [
            "40kg x 5",
            "55kg x 3"
          ],
          "rpe": true,
          "mainLift": true,
          "note": "Same successful W27 load, half the working sets. RPE 6-7 ceiling."
        },
        {
          "name": "BB Bent-Over Row",
          "weight": 65,
          "sets": 2,
          "reps": 8,
          "unit": "kg",
          "warmup": [
            "40kg x 5",
            "50kg x 3"
          ],
          "rpe": true,
          "mainLift": true,
          "note": "Use the actual W27 load (65kg, RPE 8), but only two sets. Monitor the biceps tendon."
        },
        {
          "name": "DB Incline Press",
          "weight": 40,
          "sets": 2,
          "reps": 10,
          "unit": "kg",
          "note": "Reduced-volume hold."
        },
        {
          "name": "Cable Face Pull",
          "weight": 32,
          "sets": 2,
          "reps": 12,
          "unit": "kg",
          "note": "Controlled; no bonus set."
        },
        {
          "name": "DB Lateral Raise",
          "weight": 7,
          "sets": 2,
          "reps": 10,
          "unit": "kg/hand",
          "note": "Slow eccentric."
        },
        {
          "name": "DB Hammer Curl — Tendon Probe",
          "weight": 6,
          "sets": 2,
          "reps": 8,
          "unit": "kg/hand",
          "warmup": [
            "4kg/hand x 8"
          ],
          "note": "3s eccentric. This is a small diagnostic exposure before Tuesday physio, not a strength test. Stop immediately if sensation becomes pain, increases rep-to-rep, or changes technique. Record during-set and next-morning response."
        }
      ]
    },
    {
      "id": "lower-a",
      "date": "2026-07-22",
      "name": "Lower A — Post-Physio Reduced Volume",
      "lowerWarmup": true,
      "cueCard": "squat",
      "note": "PROVISIONAL. Run only if Monday's 24-48h response is stable and Tuesday's physio permits it. Apply physio changes to the canonical plan before training. RPE 6-7 ceiling; remove the session if systemic markers or subjective state deteriorate.",
      "exercises": [
        {
          "name": "BB Back Squat",
          "weight": 62.5,
          "sets": 2,
          "reps": 8,
          "unit": "kg",
          "warmup": [
            "bar x 5",
            "40kg x 5",
            "50kg x 3",
            "55kg x 2"
          ],
          "rpe": true,
          "mainLift": true,
          "film": "Set 1 — side view if physio wants follow-up",
          "note": "Conservative placeholder. Physio instruction overrides load, reps and cues. Do not progress merely because prior form footage was accepted."
        },
        {
          "name": "DB RDL",
          "weight": 37.5,
          "sets": 2,
          "reps": 8,
          "unit": "kg",
          "note": "Neutral chin; hinge, not squat. Track whether spinal-erector fatigue is ordinary, disproportionate, or changed by exercise order."
        },
        {
          "name": "Leg Press",
          "weight": 120,
          "sets": 2,
          "reps": 10,
          "unit": "kg",
          "note": "Reduced-volume hold."
        },
        {
          "name": "Lying Leg Curl",
          "weight": 36,
          "sets": 2,
          "reps": 8,
          "unit": "kg",
          "note": "Reduced from the uncompleted 3x10 prescription."
        },
        {
          "name": "Cable Pull-Through",
          "weight": 44,
          "sets": 1,
          "reps": 12,
          "unit": "kg",
          "note": "Optional final set only if the session remains clearly submaximal."
        }
      ]
    },
    {
      "id": "core-a",
      "date": "2026-07-23",
      "name": "Core Mini-Session A — Recovery-Compatible",
      "note": "PROVISIONAL. About 15-20 minutes. Perform only if it feels restorative after Lower A; otherwise remove it without repayment.",
      "exercises": [
        {
          "name": "Dead Bug",
          "weight": "BW",
          "sets": 2,
          "reps": "10/side"
        },
        {
          "name": "Plank",
          "weight": "BW",
          "sets": 2,
          "reps": "45-60s",
          "note": "Stop on form break; duration is not a debt."
        },
        {
          "name": "Pallof Press",
          "weight": "band",
          "sets": 2,
          "reps": "10/side",
          "note": "Anti-rotation; straight arms and tall posture."
        },
        {
          "name": "Banded Side Walks",
          "weight": "band",
          "sets": 2,
          "reps": "12/side",
          "note": "Band above knees."
        },
        {
          "name": "Single-Leg Glute Bridge",
          "weight": "BW",
          "sets": 2,
          "reps": "10/side",
          "note": "Left-side focus; 2s hold at top."
        }
      ]
    },
    {
      "id": "upper-b",
      "date": "2026-07-24",
      "name": "Upper B — Conditional Reduced Volume",
      "cueCard": "ohp",
      "note": "PROVISIONAL. Keep only if Monday and Wednesday produced no delayed crash and recovery markers are stable or improving. RPE 6-7 ceiling. Remove rather than compress later if the gate fails.",
      "exercises": [
        {
          "name": "BB Overhead Press",
          "weight": 40,
          "sets": 2,
          "reps": 8,
          "unit": "kg",
          "warmup": [
            "bar x 5",
            "25kg x 3",
            "30kg x 2",
            "35kg x 1"
          ],
          "rpe": true,
          "mainLift": true,
          "note": "Hold load; half normal working sets."
        },
        {
          "name": "Lat Pulldown",
          "weight": 54,
          "sets": 2,
          "reps": 10,
          "unit": "kg",
          "note": "Return to the last demonstrated load. The untested 57kg progression is deferred during the bridge week."
        },
        {
          "name": "Cable Tricep Pushdown",
          "weight": 50,
          "sets": 2,
          "reps": 10,
          "unit": "kg",
          "note": "Reduced-volume hold."
        },
        {
          "name": "DB Hammer Curl",
          "weight": 6,
          "sets": 2,
          "reps": 8,
          "unit": "kg/hand",
          "warmup": [
            "4kg/hand x 8"
          ],
          "note": "Only if Monday's exposure and physio review support it. 3s eccentric; stop if symptoms increase."
        },
        {
          "name": "DB Lateral Raise",
          "weight": 7,
          "sets": 2,
          "reps": 10,
          "unit": "kg/hand"
        },
        {
          "name": "Cable Rear Delt Fly",
          "weight": 14,
          "sets": 2,
          "reps": 12,
          "unit": "kg"
        }
      ]
    },
    {
      "id": "lower-b",
      "date": "2026-07-25",
      "name": "Lower B — Conditional Technique Exposure",
      "lowerWarmup": true,
      "cueCard": "deadlift",
      "note": "OPTIONAL/PROVISIONAL. This is the first session to remove if the week is not clearly stable. Perform only with physio clearance and a good response to Lower A. No attempt to repay Week 27.",
      "exercises": [
        {
          "name": "BB Deadlift",
          "weight": 75,
          "sets": 2,
          "reps": 6,
          "unit": "kg",
          "warmup": [
            "bar x 5",
            "40kg x 3",
            "50kg x 2",
            "60kg x 1",
            "70kg x 1"
          ],
          "rpe": true,
          "mainLift": true,
          "film": "Set 1 — side view if physio requests",
          "note": "Reduced from 3x8 to 2x6. Dead-stop; reversed setup; lats tight; controlled eccentric. Monitor spinal-erector fatigue using Tuesday's physio guidance."
        },
        {
          "name": "BB Back Squat — touch",
          "weight": 62.5,
          "sets": 1,
          "reps": 6,
          "unit": "kg",
          "note": "Technique touch only, and only if specifically compatible with physio feedback. Delete if unnecessary."
        },
        {
          "name": "DB RDL",
          "weight": 37.5,
          "sets": 1,
          "reps": 8,
          "unit": "kg",
          "note": "Optional; omit if erectors are already adequately loaded."
        },
        {
          "name": "Cable Pull-Through",
          "weight": 44,
          "sets": 1,
          "reps": 12,
          "unit": "kg",
          "note": "Optional."
        },
        {
          "name": "Calf Raise",
          "weight": 12.5,
          "sets": 2,
          "reps": 12,
          "unit": "kg",
          "note": "Single DB; monitor left heel/Achilles."
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
      "date": "2026-07-26",
      "name": "Core Mini-Session B — Optional Stability",
      "note": "OPTIONAL. Perform only if it feels restorative and Lower B caused no delayed fatigue. Otherwise use ordinary easy walking or full rest; do not reschedule.",
      "exercises": [
        {
          "name": "Dead Bug",
          "weight": "BW",
          "sets": 2,
          "reps": "10/side"
        },
        {
          "name": "Plank",
          "weight": "BW",
          "sets": 2,
          "reps": "45-60s",
          "note": "Stop on form break."
        },
        {
          "name": "Pallof Press",
          "weight": "band",
          "sets": 2,
          "reps": "10/side"
        },
        {
          "name": "Clamshells",
          "weight": "band",
          "sets": 2,
          "reps": "12/side",
          "note": "Band above knees."
        },
        {
          "name": "Single-Leg Glute Bridge",
          "weight": "BW",
          "sets": 2,
          "reps": "10/side",
          "note": "Left-side focus."
        }
      ]
    }
  ]
};
