import React from "react";
import { useTheme } from "../../context/ThemeProvider";
import TeamStudy from "../../public/Images/team-study.jpg";
import TeamPuzzle from "../../public/Images/team-puzzle.jpg";
import Image from "next/image";
import { firstPageParagraph } from "../../assets/Constants";

const Column3 = () => {
  const { darkTheme } = useTheme();

  const FrontEndBox = () => {
    return (
      <div className="WhiteCard blur-thing-3xl justify-start">
        <Image
          className="contrast-[0.9]"
          src={TeamStudy}
          style={{ borderRadius: "12px 12px 0 0" }}
          alt="front-end"
        />
        <h2 className="text-[2rem] font-[600] px-8">Front-End</h2>
        <div className="flex flex-col gap-2 px-8 pb-8">
          {firstPageParagraph.frontEnd.map((para, index) => (
            <div dangerouslySetInnerHTML={{ __html: para}} key={index}></div>)
          )}
        </div>
      </div>
    );
  };

  const BackendBox = () => {
    return (
      <div className="WhiteCard blur-thing-3xl justify-start">
        <Image
          className="contrast-[0.9]"
          src={TeamPuzzle}
          style={{ borderRadius: "12px 12px 0 0" }}
          alt="back-end"
        />
        <h2 className="text-[2rem] font-[600] px-8">Back-End</h2>
        <div className="flex flex-col gap-2 px-8 pb-8">
          {firstPageParagraph.backEnd.map((para, index) => (
            <div dangerouslySetInnerHTML={{ __html: para}} key={index}></div>)
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flexcolcenter">
      <div className={`Title ${darkTheme ? "text-white" : "text-highlight"}`}>
        <p>My Skills</p>
      </div>
      <div className={`max-w-[800px] flex flex-col justify-center items-center md:grid md:grid-cols-2 w-full gap-8 ${darkTheme ? "text-white" : "text-black"}`}>
        <FrontEndBox />
        <BackendBox />
      </div>
    </div>
  );
};

export default Column3;
