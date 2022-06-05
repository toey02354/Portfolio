import React, { useContext } from "react";
import Link from "next/link";
import { Typography } from "@mui/material";
import { ThemeContext } from "../components/Layout/Layout";

const Thankyou = () => {
  const [dark] = useContext(ThemeContext);

  return (
    <div
      className={"min-h-[88vh] flex flex-col justify-center items-center ".concat(
        dark ? "text-white" : "text-black"
      )}
    >
      <Typography className="uppercase" variant="h3">
        Thank you for your kind feedback
      </Typography>
      <Link href="/">
        <Typography
          className="uppercase cursor-pointer hover:text-blue-500 hover:underline"
          variant="h3"
        >
          Go Home
        </Typography>
      </Link>
    </div>
  );
};

export default Thankyou;
