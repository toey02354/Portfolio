import React from "react";
import { Divider } from "@mui/material";
import { EduCards } from "./CardItems";

const EduSlideCards = () => {
  return (
    <div className="flex flex-col gap-4">
      {EduCards.map((card, index) => (
        <div
          className={`h-full w-full flex flex-col justify-center skew-y-[-5deg] p-8 gap-4 ${
            index % 2 == 0 ? "TW-DOMINANT-BG text-white" : "bg-white"
          }`}
          key={`educard-${index}`}
        >
          <div className="text-2xl font-bold skew-y-[5deg] text-center">
            <text className="border-b-2">{card.title}</text>
          </div>
          <div className="skew-y-[5deg]">
            <div className="py-4">{card.content1}</div>
            <Divider />
            <div className="py-4">{card.content2}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EduSlideCards;
