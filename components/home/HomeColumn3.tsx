import React from "react";

import { cardTypes, firstPageParagraph } from "@/assets/data/Constants";
import { useTheme } from "@/context/ThemeProvider";
import TeamStudy from "@/public/Images/team-study.jpg";
import TeamPuzzle from "@/public/Images/team-puzzle.jpg";
import Card from "@/components/shared/Card";

const Column3 = () => {
  const { darkTheme } = useTheme();

  return (
    <div className="min-h-screen flexcolcenter">
      <div className={`Title ${darkTheme ? "text-white" : "text-highlight"}`}>
        <p>My Skills</p>
      </div>
      <div className={`max-w-[800px] flex flex-col justify-center items-center md:grid md:grid-cols-2 w-full gap-8 ${darkTheme ? "text-white" : "text-black"}`}>
        <Card
          cardType={cardTypes.ImageTitleCard}
          contents={firstPageParagraph.frontEnd}
          titleMessage="Front-End"
          titleImage={TeamStudy}
          />
        <Card
          cardType={cardTypes.ImageTitleCard}
          contents={firstPageParagraph.backEnd}
          titleMessage="Back-End"
          titleImage={TeamPuzzle}
        />
      </div>
    </div>
  );
};

export default Column3;
