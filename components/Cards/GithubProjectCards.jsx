import React from "react";
import { Divider } from "@mui/material";

const cards = [
  {
    title: <p className="TW-CARD-TITLE">Facebook Clone</p>,
    content1: "Tech Stack: NEXTJS, Tailwind, MUI",
    content2: "Just a cloning of Facebook Website",
    link: "",
  },
  {
    title: <p className="TW-CARD-TITLE">Facebook Clone</p>,
    content1: "Tech Stack: NEXTJS, Tailwind, MUI",
    content2: "Just a cloning of Facebook Website",
    link: "",
  },
  {
    title: <p className="TW-CARD-TITLE">Facebook Clone</p>,
    content1: "Tech Stack: NEXTJS, Tailwind, MUI",
    content2: "Just a cloning of Facebook Website",
    link: "",
  },
  {
    title: <p className="TW-CARD-TITLE">Facebook Clone</p>,
    content1: "Tech Stack: NEXTJS, Tailwind, MUI",
    content2: "Just a cloning of Facebook Website",
    link: "",
  },
];

const GithubProjectCards = () => {
  return (
    <div className="flex flex-row overflow-x-scroll xl:grid xl:grid-cols-2 gap-2 m-3">
      {cards.map((card, index) => (
        <div
          className="min-w-full h-[300px] flex flex-row bg-white rounded-xl"
          key={index}
        >
          <div className="TW-DOMINANT-BG text-white px-4 rounded-l-xl">
            {card.title}
          </div>
          <div className="px-6 w-full">
            <div className="py-4">{card.content1}</div>
            <Divider />
            <div className="py-4">{card.content2}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GithubProjectCards;
