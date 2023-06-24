import React, { FC } from "react";

import { ExpCards, cardTypes } from "../../assets/Constants";
import Card from "../shared/Card";

const ExpSlideCards: FC = () => {

  return (
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
  );
};

export default ExpSlideCards;
