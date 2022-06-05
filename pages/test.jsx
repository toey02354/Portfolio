import React from "react";
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

  return (
    <div className="h-screen flex flex-col items-center mt-[2rem]">
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
