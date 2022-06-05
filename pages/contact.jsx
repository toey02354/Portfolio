import Head from "next/head";
import React, { useContext } from "react";
import PostForm from "../components/PostForm";
import { Grow } from "@mui/material";
import { ThemeContext } from "../components/Layout/Layout";

const Contact = () => {
  const [dark] = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>Contact Toey</title>
      </Head>

      <Grow in>
        <div className="min-h-[88vh] flex flex-col justify-center items-center">
          <div
            className={"text-[3rem] font-bold tracking-[0.1rem] uppercase ".concat(
              dark ? "text-white" : null
            )}
          >
            Feedback
          </div>
          <h4
            className={"flex flex-wrap items-center justify-center py-4 gap-4 ".concat(
              dark ? "text-white" : null
            )}
          >
            Or you can send me an email
            <div className="text-red-600">natthaphol.uth@gmail.com</div>
          </h4>
          <PostForm />
        </div>
      </Grow>
    </>
  );
};

export default Contact;
