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
    if (scrollY > logoSkillceRef.current?.offsetTop - 800) {
      setShowLogo(true);
    }
    if (scrollY > experienceRef.current?.offsetTop - 800) {
      // console.log(experienceRef.current.offsetTop);
      // console.log(window.innerHeight);
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
        className="TW-HIGHLIGHT-TEXT w-screen flex justify-center items-center pt-[2rem] text-3xl uppercase font-bold drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)]"
        ref={experienceRef}
      >
        Skill {"&"} Experience
      </div>
      <Grow in={showCard}>
        <div className="w-screen flex flex-row justify-start xl:justify-center items-center mb-[2rem]">
          <div className="xl:w-[50vw] flex flex-row overflow-x-scroll scroll-smooth my-[1rem] xl:mx-[15rem] p-3">
            <ExpSlideCards />
          </div>
        </div>
      </Grow>
    </div>
  );
};

export default Column2;
