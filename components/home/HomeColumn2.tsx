import Typewriter from "typewriter-effect";

import { cardTypes } from "@/assets/data/Constants";
import { logoGroup1, logoGroup2, logoGroup3 } from "@/assets/LogoGroup";
import { useTheme } from "@/context/ThemeProvider";
import Card from "@/components/shared/Card";

const Column2 = () => {
  const { darkTheme } = useTheme();

  return (
    <div className="min-h-screen flexcolcenter py-[2rem]">
      <div className={`sm:py-0 sm:px-20 text-[2.1rem] sm:text-[3.3rem] ${darkTheme ? "text-white" : "HIGHLIGHT-TEXT"}`}>
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
      <div className="min-h-screen flexcenter">
        <Card cardType={cardTypes.LogoCard} contents={[...logoGroup1, ...logoGroup2, ...logoGroup3]} />
      </div>
    </div>
  );
};

export default Column2;
