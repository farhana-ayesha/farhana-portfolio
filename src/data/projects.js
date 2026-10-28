/**
 * Featured projects. Every description, feature and stack item below is taken
 * from the project README or live site — do not add unverified claims.
 * Bazardor has no public repository link from the owner yet, so it only has a live link.
 */
export const projects = [
  {
    slug: "devstack",
    index: "01",
    name: "DevStack",
    preview: {
      src: "/projects/devstack.jpg",
      alt: "DevStack homepage with the heading Build Your Ideal Development Stack, a layered stack illustration, and technology cards below.",
    },
    tagline: "Build your own frontend stack, one technology at a time.",
    description:
      "A small app for browsing frontend, backend, database and tooling technologies, comparing them, and collecting the ones you like into a personal stack.",
    highlights: [
      "Add or remove technologies with duplicate protection and a toast for every action",
      "All technology data comes from a JSON file, so the UI stays data-driven",
      "Responsive grid of cards with a mobile navigation menu",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "React-Toastify"],
    links: {
      live: "https://devstack-app.vercel.app/",
      github: "https://github.com/farhana-ayesha/devstack-app",
    },
  },
  {
    slug: "fitlog",
    index: "02",
    name: "FitLog",
    preview: {
      src: "/projects/fitlog.jpg",
      alt: "FitLog homepage with the heading Train with intent. Log every set., plan and saved counters, and a grid of workout cards.",
    },
    tagline: "A workout library that keeps today's plan and saved lifts.",
    description:
      "A dark workout companion: browse twelve lifts, open a detail page for each one, build a plan for today, and keep saved workouts for later.",
    highlights: [
      "Twelve lifts pulled from the FitLog API, with equipment, difficulty, sets, reps, duration, calories and step-by-step instructions",
      "Today's plan capped at five workouts, plus a separate saved list with live navbar badges",
      "My Plan page with totals, tabs, search, sort and localStorage persistence",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "lucide-react"],
    links: {
      live: "https://fitlog-gules-nu.vercel.app/",
      github: "https://github.com/farhana-ayesha/fitlog",
    },
  },
  {
    slug: "bazardor",
    index: "03",
    name: "Bazardor",
    preview: {
      src: "/projects/bazardor.jpg",
      alt: "Bazardor homepage in Bengali with a scrolling price ticker, the daily bazaar price heading, and cards for products whose prices rose today.",
    },
    tagline: "Daily essential prices for the Bangladeshi market, in one place.",
    description:
      "A Bengali price-tracking app for everyday essentials such as rice, lentils, oil, vegetables, fish, meat, eggs and spices, with market-wise prices and daily changes.",
    highlights: [
      "Live price ticker plus the day's top six rising and falling products",
      "Category pages with price sorting and a protected detail table for signed-in users",
      "Email/password, Google and GitHub sign-in with BetterAuth, plus profile updates",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "BetterAuth",
      "MongoDB",
    ],
    links: {
      live: "https://bazardor-gamma.vercel.app/",
    },
  },
];
