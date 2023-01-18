interface IExperienceCard {
  title: string;
  content: string[];
}

interface IGitHubCard {
  title: string;
  content1: string;
  content2: string;
  link: string;
}

export const ExpCards: IExperienceCard[] = [
  {
    title: "Pali-Thai Dictionary (Web App and Mobile App)",
    content: [
      "Web App project (back-office for admins)",
      "I created a website from scratch, both front-end and back-end.",
      "A responsive website for admins to view, edit, create, and delete words.",
      "Mobile App project (for users)",
      "I implemented and updated the ui according to the design in Figma",
      "Setup breakpoint for multiple devices (responsive)",
      "Tech stack: Typescript, React, MUI, ContextAPI, Axios, NestJS, Prisma, PostgreSQL, Angular, Ionic",
    ],
  },
  {
    title: "E-Commerce Project",
    content: [
      "An E-Commerce Platform for seller",
      "I created a project from scratch, set up the structure of the project, and developed the project.",
      "A website for admins to manage their store, products, orders, and select a color theme.",
      "Created custom hooks, form validators, multiple layouts and stores (state management).",
      "Authentication, Roles, Protected routes.",
      "Typescript, Typescript, NextJS, ContextAPI, Axios, Ant-Design, TailwindCSS",
    ],
  },
  {
    title: "Sompo",
    content: [
      "I created a project from scratch and set the project structure for the team.",
      "Developed, maintained, and managed login and sign-up pages and protected routes for pages with CRUD features.",
      "Created custom hooks and form validators.",
      "Typescript, ReactJS, Redux, Axios, Vite, Ant-Design, TailwindCSS, JWT",
    ],
  },
  {
    title: "Card Game API",
    content: [
      "Created, and managed API and Webhook for the game with tons of requests per second.",
      "Pay and Reward amount calculation within a single request.",
      "Django, PostgreSQL",
    ],
  },
  {
    title: "Payment Gateway (Microservices)",
    content: [
      "Created, maintained, and managed applications(services) of the system with a team.",
      "Integrated, and managed the new payment method of the system.",
      "Python, Django, REST framework and Salt (cryptography), Postgres, Redis",
    ],
  },
];

export const GithubCards: IGitHubCard[] = [
  {
    title: "Pokemon Cards",
    content1: "TypeScript, React, Tailwind",
    content2:
      "An application that fetch pokemons data from PokeAPI, display 12 cards a page, sort features by ID or name",
    link: "https://github.com/toey02354/Pokemons-Cards",
  },
  {
    title: "Facebook Clone",
    content1: "NEXTJS, Tailwind, MUI",
    content2:
      "Just A cloning version of Facebook desktop responsive website, I built this cloning version in the freetime to sharpening my skill",
    link: "https://github.com/toey02354/Facebook_Clone",
  },
  {
    title: "Memories Social Network",
    content1: "MERN - MongoDB ExpressJS ReactJS NodeJS, Redux, MUI, Vite",
    content2:
      "A social network with CRUD features via Redux and store data in MongoDB",
    link: "https://github.com/toey02354/Memories_MERN",
  },
];
