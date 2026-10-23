# Teens continuity integration (staged, NOT deployed)
Date: 2026-10-23
- Preserve all existing English courses (Foundation, Práctica, English I-IV), grades, enrollment and transcript logic.
- Preserve all Juniors data, capsules, challenges, mental health and financial literacy unchanged.
- Only grades 9-12 (seedling/explorer/builder/launch) can appear in Dual Diploma.
- Source of student identity is verified SIS mapping, never email or display name. LMS students.sis_student_id is a candidate mapping field; cross-system matching still needs validation.
- Database: rxjrtahekouwxywkeqvi has teens_life_skills_progress, teens_group_projects, teens_project_contributions. RLS is enabled and anon/authenticated grants are revoked, so browser access is intentionally disabled.
- No automatic academic credit: approvals are evidence for academic review.
- No ChanakCoins transfer: existing coin ledger and restoration workflow must remain the authoritative source.
- Future: authenticated server-side ingestion with idempotency on (student_id, source_system, source_activity_id), least-privilege role checks, audited updates, project contributions, UI wiring and integration tests.
- Do NOT merge until tested against English modules, existing evidences, Off Campus routes, junior isolation and actual student permissions.
- No changes to Chanak Flex, SIS, main or production have been made by this branch.
