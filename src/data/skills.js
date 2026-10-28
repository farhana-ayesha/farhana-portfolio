/**
 * Tech stack groups and skill areas, both derived only from the projects in
 * src/data/projects.js and the public GitHub profile. No scores or percentages.
 */
export const techGroups = [
  { title: "Core", items: ["HTML", "CSS", "JavaScript"] },
  { title: "Frameworks", items: ["React", "Next.js"] },
  { title: "Language", items: ["TypeScript"] },
  { title: "Styling", items: ["Tailwind CSS", "DaisyUI"] },
  { title: "Tools", items: ["Git", "GitHub", "Vite"] },
  { title: "Also worked with", items: ["MongoDB", "BetterAuth"] },
];

export const skills = [
  {
    title: "Responsive interfaces",
    description:
      "Mobile-first layouts that stay usable from small phones up to wide desktop screens.",
    evidence: "All three projects",
  },
  {
    title: "Component architecture",
    description:
      "Reusable cards, lists and layout pieces, with project data kept separate from the UI.",
    evidence: "DevStack, FitLog",
  },
  {
    title: "State management",
    description:
      "Plan, saved and filter state handled with React state and persisted in the browser.",
    evidence: "FitLog (localStorage), DevStack (stack builder)",
  },
  {
    title: "API integration",
    description:
      "Fetching remote data, showing loading states, and handling unknown routes gracefully.",
    evidence: "FitLog API, custom 404 page",
  },
  {
    title: "Authentication flows",
    description:
      "Email/password and social sign-in, protected content, and profile updates.",
    evidence: "Bazardor (BetterAuth)",
  },
  {
    title: "Search, sort and filtering",
    description:
      "Filtering by name or muscle group and ordering by duration, calories or rating.",
    evidence: "FitLog, Bazardor",
  },
];
