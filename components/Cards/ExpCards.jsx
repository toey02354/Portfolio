import React from "react";
import { ExpCards } from "./CardItems";

const ExpSlideCards = () => {
  return (
    <div className="flex flex-col gap-4">
      {ExpCards.map((card, index) => (
        <div
          className={`h-full w-full flex flex-col justify-center skew-y-[-3deg] py-[4rem] px-8 gap-4 ${
            index % 2 == 0 ? "TW-DOMINANT-BG text-white" : "bg-white"
          }`}
          key={`expcard-${index}`}
        >
          <div className="text-2xl font-bold skew-y-[3deg] text-center">
            <text className="border-b-2">{card[0]}</text>
          </div>
          <ul key="detail" className="skew-y-[3deg] list-disc">
            {card[1].map((detail, index) => (
              <React.Fragment key={`detail-${index}`}>
                {index === card[1].length - 1 && (
                  <div>
                    <strong>TECH STACK</strong>: {detail}
                  </div>
                )}
                {index !== card[1].length - 1 && <li>{detail}</li>}
              </React.Fragment>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExpSlideCards;
