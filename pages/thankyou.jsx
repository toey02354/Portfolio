import Head from "next/head";
import Link from "next/link";
import { useTheme } from "../context/ThemeProvider";

const Thankyou = () => {
  const { dark } = useTheme();

  return (
    <>
      <Head>
        <title>Thank You!</title>
      </Head>
      <div
        className={`min-h-[88vh] flex flex-col justify-center items-center ${
          dark ? "text-white" : "text-black"
        }`}
      >
        <div className="uppercase" variant="h3">
          Thank you for your kind feedback
        </div>
        <Link href="/" passHref>
          <div
            className="uppercase cursor-pointer hover:text-blue-500 hover:underline"
            variant="h3"
          >
            Go Home
          </div>
        </Link>
      </div>
    </>
  );
};

export default Thankyou;
