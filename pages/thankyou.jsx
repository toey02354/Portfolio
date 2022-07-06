import Head from "next/head";
import Link from "next/link";
import { Typography } from "@mui/material";
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
        <Typography className="uppercase" variant="h3">
          Thank you for your kind feedback
        </Typography>
        <Link href="/" passHref>
          <Typography
            className="uppercase cursor-pointer hover:text-blue-500 hover:underline"
            variant="h3"
          >
            Go Home
          </Typography>
        </Link>
      </div>
    </>
  );
};

export default Thankyou;
