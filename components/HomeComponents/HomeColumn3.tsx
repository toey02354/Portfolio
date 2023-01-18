import { useTheme } from "../../context/ThemeProvider";
import TeamStudy from "../../public/Images/team-study.jpg";
import TeamPuzzle from "../../public/Images/team-puzzle.jpg";
import Image from "next/image";

const Column3 = () => {
  const { dark } = useTheme();

  const FrontEndBox = () => {
    return (
      <div className="WhiteCard blur-thing-3xl justify-start skew-y-0 ">
        <Image
          className="contrast-[0.9]"
          src={TeamStudy}
          style={{ borderRadius: "12px 12px 0 0" }}
          alt="front-end"
        />
        <h2 className="text-[2rem] font-[600] px-8">Front-End</h2>
        <div className="flex flex-col gap-2 px-8 pb-8">
          <p>
            My favorite language of F/E is <strong>Typescript</strong>
          </p>
          <p>
            My Favorite framework and library are <strong>NextJS</strong> and{" "}
            <strong>React</strong>
          </p>
          <p className="italic">Most of projects I built them from scratch</p>
          <p>
            But I can develop in any popular front-end frameworks like Angular,
            Svelte, and Vanilla Javascript
          </p>
          <p>
            The Front-End part is so much fun, there are tons of tools that I
            love such as <strong>MUI</strong>, <strong>TailwindCSS</strong>,
            StyledComponents, Redux
          </p>
        </div>
      </div>
    );
  };

  const BackendBox = () => {
    return (
      <div className="WhiteCard blur-thing-3xl justify-start skew-y-0">
        <Image
          className="contrast-[0.9]"
          src={TeamPuzzle}
          style={{ borderRadius: "12px 12px 0 0" }}
          alt="back-end"
        />
        <h2 className="text-[2rem] font-[600] px-8">Back-End</h2>
        <div className="flex flex-col gap-2 px-8 pb-8">
          <p>
            Languages that I like to work with of B/E are{" "}
            <strong>Python</strong> and <strong>NodeJS</strong>
          </p>
          <p>
            Frameworks that I used the most in the business work are{" "}
            <strong>Django</strong>, FastAPI,
            <strong>NodeJS</strong>, ExpressJS, and NestJS
          </p>
          <p>
            I have used so many Databases in both business work and freelance
            work, such as <strong>PostgreSQL</strong>, MySQL,{" "}
            <strong>MongoDB</strong>, Redis
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flexcolcenter">
      <div className={`Title ${dark ? "text-white" : "text-highlight"}`}>
        <p>My Skills</p>
      </div>
      <div className={`max-w-[800px] flex flex-col justify-center items-center md:grid md:grid-cols-2 w-full gap-8 ${dark ? "text-white" : "text-black"}`}>
        <FrontEndBox />
        <BackendBox />
      </div>
    </div>
  );
};

export default Column3;
