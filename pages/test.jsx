import { useState } from "react";
import Head from "next/head";
import TypeWriter from "../components/TypingEffect/TypeWriter";
import { useTheme } from "../context/ThemeProvider";

const Test = () => {
  const typeWriter = new TypeWriter();
  const [access, setAccess] = useState(false);
  const [data, setData] = useState("");
  const [message, setMessage] = useState();
  const { dark } = useTheme();

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
    if (value === process.env.secretKey) {
      setAccess(true);
    } else {
      setMessage("Wrong key!");
    }
  };

  return (
    <>
      <Head>
        <title>Experiement - Toey Portfolio</title>
      </Head>
      {!access ? (
        <div className="h-[90vh] flexcolcenter">
          <input
            autoComplete="off"
            type="password"
            key="accessKey"
            placeholder="&rarr; Enter Password to access"
            className={`w-full max-w-[350px] md:max-w-[600px] p-4 rounded-xl uppercase outline-none placeholder:tracking-wider shadow-lg
                        ${
                          dark
                            ? "bg-white text-main placeholder:text-main"
                            : "bg-main text-white placeholder:text-white/50"
                        }
                      `}
            value={data}
            onChange={(event) => setData(event.target.value)}
            onKeyPress={(event) => {
              event.key == "Enter" && handleEnter(data);
            }}
          />
          {message ? (
            <div className="p-8 text-red-600 uppercase font-[800]">
              *** {message} ***
            </div>
          ) : undefined}
        </div>
      ) : (
        <div className="h-screen flex flex-col items-center mt-[2rem] gap-8">
          <div>
            <button
              className="h-[50px] flexcenter bg-main p-[1rem] text-white uppercase rounded-xl"
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
