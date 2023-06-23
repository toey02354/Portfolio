export enum themeConstants {
  LOCAL_STORAGE_KEY = 'toey-portfolio-theme',
  LIGHT = "light",
  DARK = "darkTheme",
}

export const names = {
  firstName: "Natthaphol",
  lastName: "Uthumphirat",
  fullName: `Natthaphol Uthumphirat`,
  nickName: "Toey",
  jobTitle: "A fullstack developer",
  portfolio: "Portfolio"
};

export const pages = {
  home: `${names.nickName} ${names.portfolio}`,
  contact: `Contact ${names.nickName}`,
  experience: `Experiences`,
  experiment: `Experiment`,
  thanks: `Thank You!`
}

export const firstPageParagraph = {
  frontEnd: [
    `<p>I love developing Front-end in <strong>Typescript </strong></p>`,
    `<p>My Favorite framework and library are <strong>NextJS</strong> and <strong>React</strong></p>`,
    `<p className="italic"> Most of projects I built them from scratch </p>`,
    `<p>But I can also develop in any popular front-end frameworks like VueJS, Angular, and Svelte</p>`,
    `<p>Lately I have got a chance to do <strong>Mobile development</strong> cross-platform by using <br/> Ionic Capacitor</p>`
  ],
  backEnd: [
    `<p>Since Back-end development gets many languages for us to play with but...`,
    `<p>Languages that I love are <strong>C# dotnet</strong> and <strong>NodeJS</strong> like nestJS and expressJS</p>`,
    `<p>I also have experienced in Python Django</p>`,
    `<p>
      Databases I used the most are <strong>SQL server</strong>, <strong>PostgreSQL</strong>, MySQL, Redis, and
      <strong>MongoDB</strong>
    </p>`,
    `<p>
      And I also got a chance to deploy App multiple times via docker on <strong>AWS</strong>
    </p>`
  ]
}

interface IExperienceCard {
  title: string;
  content: string[];
  subTitle?: string
}

export const ExpCards: IExperienceCard[] = [
  {
    title: "CloudPlus - TwentyIdeas",
    subTitle: "(Microservices Project)",
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
    title: "Pali-Thai Dictionary",
    subTitle: "(Web App and Mobile App)",
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
    title: "Sompo Insurance",
    subTitle: "(Admin back-office web)",
    content: [
      "I created a project from scratch and set the project structure for the team.",
      "Developed, maintained, and managed login and sign-up pages and protected routes for pages with CRUD features.",
      "Created custom hooks and form validators.",
      "Typescript, ReactJS, Redux, Axios, Vite, Ant-Design, TailwindCSS, JWT",
    ],
  },
  {
    title: "Payment Gateway",
    content: [
      "Created, maintained, and managed applications(services) of the system with a team.",
      "Integrated, and managed the new payment method of the system.",
      "Created, and managed API and Webhook for the game with tons of requests per second.",
      "Pay and Reward amount calculation within a single request.",
      "Python, Django, REST framework and Salt (cryptography), Postgres, Redis",
    ],
  },
];

interface IGitHubCard {
  title: string;
  content1: string;
  content2: string;
  link: string;
}

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
