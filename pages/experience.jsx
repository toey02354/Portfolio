import Head from "next/head";

import ExpSlideCards from "../components/Cards/ExpCards";
import EduSlideCards from "../components/Cards/EduCards";
import GithubProjectCards from "../components/Cards/GithubProjectCards";
import { useTheme } from "../context/ThemeProvider";

const Experience = () => {
  const { dark } = useTheme();
  return (
    <>
      <Head>
        <title>Experiences</title>
      </Head>
      <div className="flexcolcenter">
        <div className={`Title ${dark ? "text-white" : "text-highlight"}`}>
          <p className="skew-y-[-3deg]">Skill {"&"} Experience</p>
        </div>
        <ExpSlideCards />
        <div className={`Title ${dark ? "text-white" : "text-highlight"}`}>
          <p className="skew-y-[-3deg]">Github Project</p>
        </div>
        <GithubProjectCards />
        <div className={`Title ${dark ? "text-white" : "text-highlight"}`}>
          <p className="skew-y-[-3deg]">Educations</p>
        </div>
        <EduSlideCards />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Experience;
