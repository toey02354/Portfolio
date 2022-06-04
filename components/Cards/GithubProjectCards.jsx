import React from "react";
import { Divider } from "@mui/material";
import styles from "./Cards.module.css";

const cards = [
  {
    title: "Facebook Clone",
    content1: "NEXTJS, Tailwind, MUI",
    content2: "A cloning version of Facebook desktop responsive website",
    link: "https://github.com/toey02354/Facebook_Clone",
  },
  {
    title: "Memories Social Network",
    content1: (
      <div>
        MERN - MongoDB ExpressJS ReactJS NodeJS
        <br /> Redux, MUI, Vite
      </div>
    ),
    content2: (
      <div>
        A social network that can create, update and delete a post
        <br />
        Store data in MongoDB
      </div>
    ),
    link: "https://github.com/toey02354/Memories_MERN",
  },
];

const GithubProjectCards = () => {
  return (
    <div className="flex flex-row overflow-x-scroll xl:grid xl:grid-cols-2 gap-2 m-3">
      {cards.map((card, index) => (
        <div
          className="min-w-full xl:h-[400px] flex flex-row bg-white rounded-xl"
          key={index}
        >
          <div className="text-white px-4 rounded-l-xl" id={styles.cardTitle}>
            <p className="TW-CARD-TITLE">{card.title}</p>
          </div>
          <div className="px-6 py-4 w-full">
            <div className="py-4">
              <div className="font-bold text-xl pb-2 uppercase">Tech Stack</div>
              {card.content1}
            </div>
            <Divider />
            <div className="py-4 w-full">
              <div className="font-bold text-xl pb-2 uppercase">Detail</div>
              {card.content2}
            </div>
            <Divider />
            <div className="py-4">
              <div className="font-bold text-xl pb-2 uppercase">Link</div>
              <a
                className="py-4 hover:text-blue-500"
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                &rarr; Click
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GithubProjectCards;
