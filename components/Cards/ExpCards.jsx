import React from "react";
import { ExpCards } from "./CardItems";
import { Divider } from "@mui/material";

const ExpSlideCards = () => {
  return (
    <div className="flex flex-row overflow-x-scroll md:grid md:grid-cols-2 gap-2 m-3">
      {ExpCards.map((card, index) => (
        <div
          className="min-w-full flex flex-col bg-white rounded-xl"
          key={index}
        >
          <div key="title" className="TW-DOMINANT-BG TW-CARD-TITLE">
            {card[0]}
          </div>
          <ul key="detail" className="flex flex-col p-[2rem] gap-4 list-disc">
            {card[1].map((detail, index) => (
              <>
                {index === card[1].length - 1 && (
                  <div>
                    <strong>TECH STACK</strong>: {detail}
                  </div>
                )}
                {index !== card[1].length - 1 && (
                  <li key={`detail-${index}`}>{detail}</li>
                )}
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExpSlideCards;
