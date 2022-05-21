import React from "react";
import TypingEffect from "../components/TypingEffect";

const test = () => {
  return (
    <div className="h-screen bg-green-200 flex flex-col item-center">
      {/* <div className="bg-red-500 h-[100px] w-[100px]" />
      <div className="bg-sky-500 h-[100px] w-[100px]" />
      <div className="bg-red-500 h-[100px] w-[100px]" /> */}
      <TypingEffect sentence="This is my typing effect" delay={50} />
    </div>
  );
};

export default test;
