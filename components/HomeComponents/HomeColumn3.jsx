import { useState, useEffect, useRef } from "react";
import EduSlideCards from "../Cards/EduCards";
import GithubProjectCards from "../Cards/GithubProjectCards";
import { Grow } from "@mui/material";

const Column3 = () => {
  const [show, setShow] = useState(false);
  const [showGH, setShowGH] = useState(false);

  const educationRef = useRef();
  const githubRef = useRef();

  const controlShow = () => {
    if (scrollY > educationRef.current?.offsetTop - 800) {
      setShow(true);
    }
    if (scrollY > githubRef.current?.offsetTop - 800) {
      setShowGH(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlShow);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="TW-HIGHLIGHT-TEXT flex justify-center items-center p-[2rem] text-4xl uppercase font-bold drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)]"
        ref={githubRef}
      >
        <p>Github Project</p>
      </div>
      <Grow in={showGH}>
        <div className="w-screen xl:w-[70vw]">
          <GithubProjectCards />
        </div>
      </Grow>
      <div
        className="TW-HIGHLIGHT-TEXT flex justify-center items-center p-[2rem] text-4xl uppercase font-bold drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)]"
        ref={educationRef}
      >
        <p>Educations</p>
      </div>
      <Grow in={show}>
        <div className="w-screen xl:w-[70vw]">
          <EduSlideCards />
        </div>
      </Grow>
    </div>
  );
};

export default Column3;
