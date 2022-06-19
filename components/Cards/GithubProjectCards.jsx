import React from "react";
import { Divider } from "@mui/material";
import { GithubCards } from "./CardItems";

const GithubProjectCards = () => {
  return (
    <div className="flex flex-row overflow-x-scroll md:grid md:grid-cols-2 gap-2 m-3">
      {GithubCards.map((card, index) => (
        <div
          className="min-w-full flex flex-col bg-white rounded-xl"
          key={index}
        >
          <div className="TW-DOMINANT-BG TW-CARD-TITLE">{card.title}</div>
          <div className="px-6 py-4 w-full">
            <div className="py-4">
              <strong>Tech Stack</strong>: {card.content1}
            </div>
            <Divider />
            <div className="py-4 w-full">
              <strong>Detail</strong>: {card.content2}
            </div>
            <Divider />
            <div className="py-4">
              <strong>Link</strong>
              <a
                className=" p-4 hover:text-blue-500"
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
