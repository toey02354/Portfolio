import Head from "next/head";
import Link from "next/link";

import { pages } from "../assets/Constants";
import { useTheme } from "../context/ThemeProvider";

const Thankyou = () => {
  const { darkTheme } = useTheme();

  return (
    <>
      <Head>
        <title>{ pages.thanks }</title>
      </Head>
      <div
        className={`min-h-[88vh] flexcolcenter ${darkTheme ? "text-white" : "text-black"}`}
      >
        <div className="uppercase">Thank you for your kind feedback</div>
        <Link href="/" passHref>
          <div className="uppercase cursor-pointer hover:text-blue-500 hover:underline">
            Go Home
          </div>
        </Link>
      </div>
    </>
  );
};

export default Thankyou;
