import { useState, useEffect, useRef } from "react";
import EduSlideCards from "../Cards/EduCards";
import { Grow } from "@mui/material";

const Column3 = () => {
  const [show, setShow] = useState(false);

  const col3Ref = useRef();

  const controlShow = () => {
    if (scrollY > col3Ref.current?.offsetTop - 500) {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlShow);
  }, []);

  return (
    <>
      <div
        className="TW-HIGHLIGHT-TEXT w-screen flex justify-center items-center pt-[2rem] text-3xl uppercase font-bold drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)]"
        ref={col3Ref}
      >
        <p>Educations</p>
      </div>
      <Grow in={show}>
        <div className="w-screen flex flex-row justify-start xl:justify-center items-center mb-[2rem]">
          <div className="flex flex-row overflow-x-scroll scroll-smooth my-[1rem] xl:mx-[15rem] p-3">
            <EduSlideCards />
          </div>
        </div>
      </Grow>
    </>
  );
};

export default Column3;
