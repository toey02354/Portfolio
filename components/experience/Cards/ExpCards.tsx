import React, { FC } from "react";
import { ExpCards } from "../../../assets/Constants";
import { useTheme } from "../../../context/ThemeProvider";

const ExpSlideCards: FC = () => {
  const { darkTheme } = useTheme();

  return (
    <div className="GroupCards">
      {ExpCards.map((card, index) => (
        <div
          key={`expcard-${index}`}
          className={`Card py-[3em] px-8 ${index % 2 == 0? "BlackCard blur-thig-xl": "WhiteCard blur-thing-3xl"} ${darkTheme ? "text-white" : undefined}`}
        >

          <div className="text-2xl font-bold text-center">
            <div>{card.title}</div>
          </div>

          <div className="text-xl text-center">
            {card.subTitle ? <div>{card.subTitle}</div> : undefined}
            <div>{card.durationProject}</div>
          </div>

          <ul key="detail" className="list-disc px-8">
            {card.contents.map((content, index) => (
              <div key={`content-${card.title}-${index}`}>
                  { index === (card.contents.length - 1) ? (
                    <div>
                      <br /><strong>TECH STACK</strong> &nbsp;
                      <div>{content}</div>
                    </div>
                  ) : (
                    <li>
                      {content}
                    </li>
                  )}
              </div>
            ))}
          </ul>
          
        </div>
      ))}
    </div>
  );
};

export default ExpSlideCards;
