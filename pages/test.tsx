import { useState } from "react";
import Head from "next/head";
import { useTheme } from "../context/ThemeProvider";

const Test = () => {
  const [access, setAccess] = useState(false);
  const [data, setData] = useState("");
  const [message, setMessage] = useState<string>("");
  const { dark } = useTheme();

  const handleEnter = (value: string) => {
    if (value === process.env.secretKey) {
      setAccess(true);
    } else {
      setMessage("Wrong key!");
    }
  };

  return (
    <>
      <Head>
        <title>Experiement</title>
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
