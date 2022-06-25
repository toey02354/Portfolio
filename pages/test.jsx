import React, { useState } from "react";
import Head from "next/head";
import TypeWriter from "../components/TypingEffect/TypeWriter";

const Test = () => {
  const typeWriter = new TypeWriter();
  const [access, setAccess] = useState(false);
  const [data, setData] = useState(null);

  const handleClick = () => {
    typeWriter
      .typeString("\nthis is my typing tester")
      .pauseFor(1000)
      .typeString("\nNice Try TOEY!")
      .pauseFor(1000)
      .deleteAll(50)
      .start();
  };

  const handleEnter = (value) => {
    if (value === "kaiser") {
      setAccess(true);
    }
  };

  return (
    <>
      <Head>
        <title>Experiement - Toey Portfolio</title>
      </Head>
      {!access ? (
        <div className="h-[90vh] flex justify-center items-center">
          <input
            autoComplete="off"
            type="password"
            key="accessKey"
            className="w-[50vw] p-4 rounded-xl bg-slate-800 text-white uppercase outline-none placeholder:text-white/50 placeholder:tracking-wider shadow-lg"
            placeholder="&rarr; Enter Password to access"
            value={data}
            onChange={(event) => setData(event.target.value)}
            onKeyPress={() => handleEnter(data)}
          />
        </div>
      ) : (
        <div className="h-screen flex flex-col items-center mt-[2rem] gap-8">
          <div>
            <button
              className="h-[50px] flex justify-center items-center TW-DOMINANT-BG p-[1rem] text-white uppercase rounded-xl"
              onClick={handleClick}
            >
              Click to start typing-effect
            </button>
            <pre>{typeWriter.text}</pre>
          </div>
          <div className="flex flex-col gap-2 group">
            <hr className="h-[4px] w-[50px] bg-red-800 transition-transform group-hover:rotate-45 group-hover:translate-y-[25px]" />
            <hr className="h-[4px] w-[50px] bg-red-800 transition-transform group-hover:translate-x-[200%]" />
            <hr className="h-[4px] w-[50px] bg-red-800 transition-transform group-hover:-rotate-45 roup-hover:translate-y-[25px]" />
          </div>
        </div>
      )}
    </>
  );
};

export default Test;
