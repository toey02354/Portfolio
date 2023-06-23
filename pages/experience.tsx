import Head from "next/head";

import ExpSlideCards from "../components/experience/Cards/ExpCards";
import GithubProjectCards from "../components/experience/Cards/GithubProjectCards";
import { useTheme } from "../context/ThemeProvider";
import { pages } from "../assets/Constants";

const Experience = () => {
  const { darkTheme } = useTheme();
  return (
    <>
      <Head>
        <title>{ pages.experience }</title>
      </Head>
      <div className="flexcolcenter mb-[10em]">
        <div className={`Title ${darkTheme ? "text-white" : "text-highlight"}`}>
          <p className="">Skill {"&"} Experience</p>
        </div>
        <ExpSlideCards />
        {/* <div className={`Title ${darkTheme ? "text-white" : "text-highlight"}`}>
          <p className="">Github Project</p>
        </div>
        <GithubProjectCards /> */}
      </div>
    </>
  );
};

export default Experience;
