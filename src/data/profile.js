/**
 * Single source of truth for personal details, links and the temporary site URL.
 * Replace the fallback below once the final domain is known, or set
 * NEXT_PUBLIC_SITE_URL in the deployment environment.
 */
export const profile = {
  name: "Farhana Ayesha",
  firstName: "Farhana",
  role: "Frontend Developer",
  location: "Bangladesh",
  siteUrl:"https://farhana-portfolio-orcin.vercel.app",
  intro:
    "I build clean, responsive web interfaces with React, Next.js, TypeScript and Tailwind CSS — from small UI details to complete, deployed applications.",
  bio: [
    "I'm Farhana Ayesha, a frontend developer from Bangladesh. I enjoy turning ideas into interfaces that feel simple to use, look consistent on every screen size, and stay easy to maintain.",
    "My recent work is built with React and Next.js: a workout library with saved plans, a technology stack builder, and a Bengali daily-price tracker with authentication. Each project taught me more about state, data fetching and responsive layout.",
    "Right now I'm strengthening my JavaScript and TypeScript fundamentals and building more practical projects with React and Next.js.",
  ],
  availability: "Open to frontend roles, remote work and freelance projects",
  links: {
    github: "https://github.com/farhana-ayesha",
    linkedin: "https://linkedin.com/in/farhana-ayesha",
  },
};
