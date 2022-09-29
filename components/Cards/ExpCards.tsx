import { FC } from "react";
import { ExpCards } from "./CardItems";
import { useTheme } from "../../context/ThemeProvider";

const ExpSlideCards: FC = () => {
  const { dark } = useTheme();

  return (
    <div className="GroupCards">
      {ExpCards.map((card, index) => (
        <div
          key={`expcard-${index}`}
          className={`Card py-[3em] px-8 ${
            index % 2 == 0
              ? "BlackCard blur-thig-xl"
              : "WhiteCard blur-thig-3xl"
          } ${dark ? "text-white" : undefined}`}
        >
          <div className="text-2xl font-bold skew-y-[3deg] text-center">
            <text>{card.title}</text>
          </div>
          <ul key="detail" className="skew-y-[3deg] list-disc px-8">
            {card.content.map((detail, index) => (
              <div key={`detail-${index}`}>
                {index === detail.length - 1 ? (
                  <div>
                    <strong>TECH STACK</strong>: {detail}{" "}
                  </div>
                ) : undefined}
                {index !== detail.length - 1 ? <li>{detail}</li> : undefined}
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExpSlideCards;
