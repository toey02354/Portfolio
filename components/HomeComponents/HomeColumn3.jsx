import { useState, useEffect, useRef } from "react";
import EduSlideCards from "../Cards/EduCards";
import GithubProjectCards from "../Cards/GithubProjectCards";
import { Grow } from "@mui/material";

const Column3 = () => {
  const [show, setShow] = useState(false);

  const educationRef = useRef();

  const controlShow = () => {
    if (scrollY > educationRef.current?.offsetTop - 800) {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlShow);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="TW-HIGHLIGHT-TEXT w-screen flex justify-center items-center pt-[2rem] text-3xl uppercase font-bold drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)]">
          Github Project
        </div>
        <Grow in>
          <div className="w-screen flex flex-row justify-start xl:justify-center items-center mb-[2rem]">
            <div className="xl:w-[50vw] flex flex-row overflow-x-scroll scroll-smooth my-[1rem] xl:mx-[15rem] p-3">
              <GithubProjectCards />
            </div>
          </div>
        </Grow>
      </div>
      <div
        className="TW-HIGHLIGHT-TEXT w-screen flex justify-center items-center pt-[2rem] text-3xl uppercase font-bold drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)]"
        ref={educationRef}
      >
        <p>Educations</p>
      </div>
      <Grow in={show}>
        <div className="w-screen xl:w-[70vw] flex flex-row justify-center">
          <EduSlideCards />
        </div>
      </Grow>
    </div>
  );
};

export default Column3;
