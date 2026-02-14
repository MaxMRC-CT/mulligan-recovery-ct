# Mulligan CT Website — AGENTS.md

## Purpose
Maintain a clean, fast, accessible marketing site for Mulligan Recovery Centers of CT.
Primary outcome: ship changes quickly with minimal risk and minimal diffs.

## Non-goals
- Do NOT perform large refactors unless explicitly requested.
- Do NOT change routing structure, layout hierarchy, or core styling approach unless asked.
- Do NOT introduce new libraries to solve small problems.

---

## Stack & constraints
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Prefer server components by default
- Use client components only when necessary

---

## Golden Rules (always follow)
1. Minimal diffs only. No full-file rewrites unless explicitly requested.
2. Scoped edits only — touch the smallest number of files possible.
3. One task = one slice.
4. Ask for direction instead of guessing.
5. Preserve existing naming and styling conventions.
6. No “cleanup” edits unrelated to the task.
7. No new dependencies without approval.

---

## Work Protocol
Step 1 — Identify exact files involved.
Step 2 — State which files will change.
Step 3 — Make smallest safe edit.
Step 4 — Ensure no breakage in dev.
Step 5 — Summarize changes and list files edited.

---

## Styling Rules
- Tailwind only.
- Avoid arbitrary values unless required.
- Keep spacing consistent (py-12, py-16, gap-6, space-y-4).
- Reuse existing components before creating new ones.

---

## Content Voice
- Hopeful, straightforward, non-clinical.
- Avoid clinical jargon (e.g., ASAM/3.1 unless explicitly requested).
- Use person-first language.

---

## Accessibility Baseline
- One H1 per page.
- Proper heading order.
- Descriptive alt text.
- Keyboard-accessible interactive elements.

---

## Performance Baseline
- Use next/image when appropriate.
- Avoid unnecessary client components.
- Avoid heavy animation libraries.

---

## Definition of Done
- Minimal diff
- No layout breakage
- No console errors
- Clear summary of changes
