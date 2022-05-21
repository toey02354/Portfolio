import React from "react";
// import typeSentence from "../components/Typing";
import Typewriter from "typewriter-effect";

const test = () => {
  return (
    <div className="h-screen bg-green-200 flex flex-col item-center">
      <div className="bg-red-500 h-[100px] w-[100px]" />
      <div className="bg-sky-500 h-[100px] w-[100px]" />
      <div className="bg-red-500 h-[100px] w-[100px]" />
      {/* {typeSentence("Hello world!", "#sentence")} */}
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("GeeksForGeeks")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Welcomes You")
            .start();
        }}
      />
    </div>
  );
};

export default test;
