import { CssBaseline } from "@mui/material";
import React, { useEffect } from "react";
import TypingEffect from "../components/TypingEffect";
import TypeWriter from "../components/TypingEffect/TypeWriter";

const test = () => {
  const typeWriter = new TypeWriter();

  const handleClick = () => {
    typeWriter
      .typeString("\nthis is my typing tester")
      .pauseFor(1000)
      .typeString("\nNice Try TOEY!")
      .pauseFor(1000)
      .deleteAll(50)
      .start();
  };

  // handleClick();

  return (
    <div className="h-screen flex flex-col items-center mt-[2rem]">
      {/* <div className="bg-red-500 h-[100px] w-[100px]" />
      <div className="bg-sky-500 h-[100px] w-[100px]" />
      <div className="bg-red-500 h-[100px] w-[100px]" /> */}
      {/* <TypingEffect sentence="This is my typing effect" delay={100} /> */}
      <button
        className="h-[50px] flex justify-center items-center TW-DOMINANT-BG p-[1rem] text-white uppercase rounded-xl"
        onClick={handleClick}
      >
        Click to start typing-effect
      </button>
      <pre>{typeWriter.text}</pre>
    </div>
  );
};

export default test;
