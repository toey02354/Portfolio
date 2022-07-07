import ExpSlideCards from "../Cards/ExpCards";
import LogoSkill from "../LogoSkill";
import Typewriter from "typewriter-effect";
import { useTheme } from "../../context/ThemeProvider";

const Column2 = () => {
  const { dark } = useTheme();

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
      <div className="min-h-screen flex justify-center items-center">
        <LogoSkill />
      </div>
      <div className={`Title ${dark ? "text-white" : "text-highlight"}`}>
        <p className="skew-y-[-3deg]">Skill {"&"} Experience</p>
      </div>
      <ExpSlideCards />
    </div>
  );
};

export default Column2;
