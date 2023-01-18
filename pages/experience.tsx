import Head from "next/head";

import ExpSlideCards from "../components/Cards/ExpCards";
import GithubProjectCards from "../components/Cards/GithubProjectCards";
import { useTheme } from "../context/ThemeProvider";
import { pages } from "../utils/Constants";

const Experience = () => {
  const { dark } = useTheme();
  return (
    <>
      <Head>
        <title>{ pages.experience }</title>
      </Head>
      <div className="flexcolcenter mb-[10em]">
        <div className={`Title ${dark ? "text-white" : "text-highlight"}`}>
          <p className="skew-y-[-3deg]">Skill {"&"} Experience</p>
        </div>
        <ExpSlideCards />
        <div className={`Title ${dark ? "text-white" : "text-highlight"}`}>
          <p className="skew-y-[-3deg]">Github Project</p>
        </div>
        <GithubProjectCards />
      </div>
    </>
  );
};

export default Experience;
