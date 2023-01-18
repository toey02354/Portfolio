import { FC } from "react";
import { GithubCards } from "./CardItems";
import { useTheme } from "../../context/ThemeProvider";

const GithubProjectCards: FC = () => {
  const { dark } = useTheme();
  return (
    <div className="GroupCards">
      {GithubCards.map((card, index) => (
        <div
          key={`githubcard-${index}`}
          className={`Card px-[2em] py-[2em] ${
            index % 2 == 0
              ? "BlackCard blur-thig-xl"
              : "WhiteCard blur-thing-3xl"
          } ${dark ? "text-white" : undefined}`}
        >
          <div className="text-2xl font-bold skew-y-[3deg] text-center">
            <text>{card.title}</text>
          </div>
          <div className="skew-y-[3deg]">
            <div className="py-4">
              <strong>Tech Stack</strong>: {card.content1}
            </div>
            <hr className={index % 2 == 1 ? "border-black" : undefined} />
            <div className="py-4 w-full">
              <strong>Detail</strong>: {card.content2}
            </div>
            <hr className={index % 2 == 1 ? "border-black" : undefined} />
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
