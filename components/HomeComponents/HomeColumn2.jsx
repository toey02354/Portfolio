import { useRef, useState, useEffect } from "react";
import ExpSlideCards from "../Cards/ExpCards";
import LogoAnimation from "../LogoAnimation";
import Typewriter from "typewriter-effect";
import { Grow } from "@mui/material";

const Column2 = () => {
  const experienceRef = useRef();
  const logoSkillceRef = useRef();

  const [showLogo, setShowLogo] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const controlShow = () => {
    if (logoSkillceRef.current?.offsetTop - scrollY < 300) {
      setShowLogo(true);
    }
    if (experienceRef.current?.offsetTop - scrollY < 300) {
      setShowCard(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlShow);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-[2rem]">
      <div className="TW-HIGHLIGHT-TEXT-GRAD px-10 sm:py-0 sm:px-20 text-[2.1rem] sm:text-[3.3rem]">
        <Typewriter
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
        <div className="flex justify-center items-center" ref={logoSkillceRef}>
          <LogoAnimation />
        </div>
      </Grow>
      <div
        className="TW-HIGHLIGHT-TEXT flex justify-center items-center p-[2rem] text-4xl uppercase font-bold drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)]"
        ref={experienceRef}
      >
        <p>Skill {"&"} Experience</p>
      </div>
      <Grow in={showCard}>
        <div className="w-screen xl:w-[70vw]">
          <ExpSlideCards />
        </div>
      </Grow>
    </div>
  );
};

export default Column2;
