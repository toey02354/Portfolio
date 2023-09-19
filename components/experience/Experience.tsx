import Head from "next/head";

import { ExpCards, cardTypes, pages } from "@/assets/data/Constants";
import Card from "@/components/shared/Card";
import { useTheme } from "@/context/ThemeProvider";
import React from "react";

const Experience = () => {
  const { darkTheme } = useTheme();
  return (
    <React.Fragment>
      <Head>
        <title>{pages.experience}</title>
      </Head>
      <div className="FLEX-COL-CENTER mb-[10em]">
        <div
          className={`TYPO-TITLE ${
            darkTheme ? "text-white" : "text-highlight"
          }`}
        >
          <p className="">Skill {"&"} Experience</p>
        </div>
        <div className="FLEX-COL-G4">
          {ExpCards.map((card, index) => (
            <Card
              key={`experience-${card.title}-${index}`}
              cardType={cardTypes.BulletPointsCard}
              contents={card.contents}
              titleMessage={card.title}
              extraMessage={card.durationProject}
              duration={card.duration}
              lastLineTitle="Tech Stack:"
              index={index}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;
