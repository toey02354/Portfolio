import React from "react";
import { Divider } from "@mui/material";
import { EduCards } from "./CardItems";

const EduSlideCards = () => {
  return (
    <div className="flex flex-row overflow-x-scroll xl:justify-center gap-2 m-3">
      {EduCards.map((card, index) => (
        <div
          className="min-w-[400px] xl:w-[400px] bg-white rounded-xl"
          key={index}
        >
          <div key="title" className="TW-DOMINANT-BG TW-CARD-TITLE">
            {card.title}
          </div>
          <div className="p-[2rem] rounded-xl">
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
