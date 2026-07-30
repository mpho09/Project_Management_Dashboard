# Styling changes — what Kabelo's design pass touched

This branch adds the full Tailwind CSS visual layer to the dashboard. Summary for the team
so nobody is surprised by the diff.

## New / configured for Tailwind
- `tailwind.config.js` — theme: Jira/Asana-style slate palette, indigo brand accent, status
  and priority colours, card shadows.
- `postcss.config.js` — Tailwind + autoprefixer.
- `src/index.css` — replaced the leftover Vite template styles with Tailwind directives + Inter font.
- Removed `src/App.css` (was unused Vite starter styles).
- `package.json` — added: tailwindcss, postcss, autoprefixer (dev), react-router-dom.

## Converted from semantic class names to Tailwind utilities (no logic removed)
- `src/components/layout.tsx` — sidebar styled; added nav icons + active states. Routing untouched.
- `src/dashboard/dashboardPage.tsx` — stat grid + panels styled.
- `src/projects/projectsPage.tsx` — cards, filters, toolbar styled.
- `src/projects/projectsDetailsPage.tsx` — header card, tabs, panels styled.
- `src/tasks/tasksPage.tsx` — kanban board styled.

## Content I fleshed out (was placeholder in the original)
The team's files had a few placeholder lists with 1-2 items and "remaining items follow the
same shape" comments. To make the demo look real I filled these with sample mock data:
- Dashboard: progress list (2 -> 4 items), deadlines (1 -> 4 items).
- Projects: (2 -> 6 sample projects).
- Tasks board: filled each column with sample cards.
- Project Details: filled tasks / activity / members / deadlines lists.
All of it is obviously mock frontend data — swap freely.

## Small behaviour added (brief requires these as working features)
- Projects page: the search box and filter buttons now actually work (useState + live filtering).
- Project Details: the Tasks/Overview tabs now switch (useState).
These were static in the original markup; the brief lists search + filter as required features.

## NOT touched
- `src/App.tsx` routing — identical to original.
- `src/main.tsx` — identical to original.
- Every route path and component name — unchanged, so imports still line up.
