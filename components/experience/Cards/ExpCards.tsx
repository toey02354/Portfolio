import { FC } from "react";
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
            <text>{card.title}</text>
          </div>

          <div className="text-xl text-center">
            <text>{card.subTitle}</text>
          </div>

          <ul key="detail" className="list-disc px-8">
            {card.content.map((detail, index) => (
              <div key={`detail-${index}`}>
                {index === detail.length - 1 ? (
                  <div>
                    <strong>TECH STACK</strong>: {detail} &nbsp;
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
