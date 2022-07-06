import { useRef, useState, useEffect } from "react";
import ExpSlideCards from "../Cards/ExpCards";
import LogoSkill from "../LogoSkill";
import Typewriter from "typewriter-effect";
import { Grow } from "@mui/material";
import { useTheme } from "../../context/ThemeProvider";

const Column2 = () => {
  const experienceRef = useRef();
  const logoSkillceRef = useRef();

  const [showLogo, setShowLogo] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const { dark } = useTheme();

  const controlShow = () => {
    if (logoSkillceRef.current?.offsetTop - scrollY < 300) {
      setShowLogo(true);
    }
    if (experienceRef.current?.offsetTop - scrollY < 300) {
      setShowCard(true);
    }
  };

  useEffect(() => {
    addEventListener("scroll", controlShow);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-[2rem]">
      <div
        className={`sm:py-0 sm:px-20 text-[2.1rem] sm:text-[3.3rem] ${
          dark ? "text-white" : "HIGHLIGHT-TEXT"
        }`}
      >
        <Typewriter
          style={{ textShadow: "5rem" }}
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString("A WebApp Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Thank you for visiting")
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
      </div>
      <Grow in={showLogo}>
        <div
          className="min-h-screen flex justify-center items-center"
          ref={logoSkillceRef}
        >
          <LogoSkill />
        </div>
      </Grow>
      <div
        ref={experienceRef}
        className={`flex justify-center items-center p-[2rem] text-4xl uppercase font-bold 
                  ${dark ? "text-white" : "text-highlight"}`}
      >
        <p className="skew-y-[-3deg]">Skill {"&"} Experience</p>
      </div>
      <Grow in={showCard}>
        <div className="w-full xl:w-[50vw]">
          <ExpSlideCards />
        </div>
      </Grow>
    </div>
  );
};

export default Column2;
