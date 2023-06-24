import Head from "next/head";

import { ExpCards, cardTypes, pages } from "../assets/Constants";
import Card from "../components/shared/Card";
import { useTheme } from "../context/ThemeProvider";

const Experience = () => {
  const { darkTheme } = useTheme();
  return (
    <>
      <Head>
        <title>{ pages.experience }</title>
      </Head>
      <div className="flexcolcenter mb-[10em]">
        <div className={`Title ${darkTheme ? "text-white" : "text-highlight"}`}>
          <p className="">Skill {"&"} Experience</p>
        </div>
        <div className="GroupCards">

        {ExpCards.map((card, index) => (
          <Card
            key={`experience-${card.title}-${index}`}
            cardType={cardTypes.BulletPointsCard}
            contents={card.contents}
            titleMessage={card.title}
            extraMessage={card.durationProject}
            lastLineTitle="Tech Stack:"
            index={index}
          />
        ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
