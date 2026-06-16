# KR Buddy Requirements Traceability Matrix (RTM)

This traceability matrix maps KR Buddy requirements from the SRS to design and implementation artifacts in the repository.

## Requirement Mapping

| Req ID | Requirement Description | SRS Reference | Implementation / Artifact |
|---|---|---|---|
| FR-001 | Provide home page overview and quick navigation cards for key topics. | 3.1.1 | `src/pages/Index.tsx`, `src/App.tsx`, `src/components/Header.tsx`, `src/components/Layout.tsx` |
| FR-002 | Provide ARC registration guidance and practical steps. | 3.1.2 | `src/pages/ArcGuide.tsx`, `src/App.tsx` |
| FR-003 | Provide dormitory rules, safety, and resident behavior guidelines. | 3.1.3 | `src/pages/DormitoryRules.tsx`, `src/App.tsx` |
| FR-004 | Provide emergency procedures, numbers, and safety recommendations. | 3.1.4 | `src/pages/Emergency.tsx`, `src/App.tsx` |
| FR-005 | Provide Korean language basics, Hangul, and common phrase tables. | 3.1.5 | `src/pages/Language.tsx`, `src/App.tsx` |
| FR-006 | Allow users to submit help requests with name, email, category, and message. | 3.2.1 | `src/pages/Help.tsx`, `src/lib/supabase.ts`, `src/App.tsx` |
| FR-007 | Validate help request form fields before submission. | 3.2.1 / 3.2.3 | `src/pages/Help.tsx` |
| FR-008 | Store help requests in Supabase `contacts` table with status `pending`. | 3.2.1 / 6.2 | `src/pages/Help.tsx`, `src/lib/supabase.ts` |
| FR-009 | Show toast notifications and inline validation messages for help form submission. | 3.2.2 | `src/pages/Help.tsx`, `src/hooks/use-toast.ts`, `src/components/Layout.tsx` |
| FR-010 | Protect admin dashboard behind Supabase email/password authentication. | 3.3.1 | `src/pages/Login.tsx`, `src/pages/Admin.tsx`, `src/lib/supabase.ts`, `src/App.tsx` |
| FR-011 | Allow admin users to view and filter help requests by status. | 3.3.2 | `src/pages/Admin.tsx`, `src/App.tsx` |
| FR-012 | Allow admin users to mark requests as resolved. | 3.3.2 | `src/pages/Admin.tsx`, `src/lib/supabase.ts` |
| FR-013 | Allow admin users to log out. | 3.3.2 | `src/pages/Admin.tsx`, `src/pages/Login.tsx` |
| NFR-001 | Responsive layout on desktop and mobile browsers. | 5.5 / 3.4 | `src/components/Layout.tsx`, `src/components/Header.tsx`, Tailwind CSS styling across `src/pages/*.tsx` |
| NFR-002 | Use Supabase for backend authentication and data storage. | 2.6 / 4.2 | `src/lib/supabase.ts`, `src/pages/Login.tsx`, `src/pages/Help.tsx`, `src/pages/Admin.tsx` |
| NFR-003 | Handle backend failures and show friendly error messages. | 5.3 | `src/pages/Help.tsx`, `src/pages/Login.tsx`, `src/pages/Admin.tsx` |
| NFR-004 | Deployable as a static site through GitHub Pages or similar. | 2.5 / 5.5 | `package.json` scripts, `vite.config.ts`, `README.md` |
| NFR-005 | Maintainable TypeScript and modular component architecture. | 5.4 | `src/components/*`, `src/pages/*`, `src/hooks/*`, `src/lib/*` |
| NFR-006 | Provide clear and accessible UI controls and readable text. | 3.4 / 5.5 | `src/components/Layout.tsx`, `src/pages/*.tsx`, Tailwind classes in page components |

## Traceability Notes

- The SRS document is available at `docs/KR_Buddy_SRS.md`.
- Implementation artifacts are primarily located in the `src/pages`, `src/components`, `src/hooks`, and `src/lib` folders.
- `src/App.tsx` defines routing and links all major pages to their navigation paths.
- `supabase.ts` supports authentication and database connectivity across help and admin features.
