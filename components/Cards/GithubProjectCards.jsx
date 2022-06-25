import React from "react";
import { Divider } from "@mui/material";
import { GithubCards } from "./CardItems";

const GithubProjectCards = () => {
  return (
    <div className="flex flex-col gap-4">
      {GithubCards.map((card, index) => (
        <div
          className={`h-full w-full flex flex-col justify-center skew-y-[-3deg] p-8 gap-4 ${
            index % 2 == 0 ? "TW-DOMINANT-BG text-white" : "bg-white"
          }`}
          key={`githubcard-${index}`}
        >
          <div className="text-2xl font-bold skew-y-[3deg] text-center">
            <text className="border-b-2">{card.title}</text>
          </div>
          <div className="skew-y-[3deg]">
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
