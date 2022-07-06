import { useState, useEffect, useRef } from "react";
import EduSlideCards from "../Cards/EduCards";
import GithubProjectCards from "../Cards/GithubProjectCards";
import { Grow } from "@mui/material";
import { useTheme } from "../../context/ThemeProvider";

const Column3 = () => {
  const [showEdu, setShowEdu] = useState(false);
  const [showGH, setShowGH] = useState(false);
  const { dark } = useTheme();

  const educationRef = useRef();
  const githubRef = useRef();

  const controlShow = () => {
    if (educationRef.current?.offsetTop - scrollY < 500) {
      setShowEdu(true);
    }
    if (githubRef.current?.offsetTop - scrollY < 300) {
      setShowGH(true);
    }
  };

  useEffect(() => {
    addEventListener("scroll", controlShow);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`flex justify-center items-center p-[2rem] text-4xl uppercase font-bold ${
          dark ? "text-white" : "text-highlight"
        }`}
        ref={githubRef}
      >
        <p className="skew-y-[-3deg]">Github Project</p>
      </div>
      <Grow in={showGH}>
        <div className="w-screen xl:w-[50vw]">
          <GithubProjectCards />
        </div>
      </Grow>
      <div
        className={`flex justify-center items-center p-[2rem] text-4xl uppercase font-bold ${
          dark ? "text-white" : "text-highlight"
        }`}
        ref={educationRef}
      >
        <p className="skew-y-[-3deg]">Educations</p>
      </div>
      <Grow in={showEdu}>
        <div className="w-screen xl:w-[50vw]">
          <EduSlideCards />
        </div>
      </Grow>
    </div>
  );
};

export default Column3;
