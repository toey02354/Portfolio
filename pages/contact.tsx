import Head from "next/head";
import PostForm from "../components/PostForm";
import { useTheme } from "../context/ThemeProvider";
import { pages } from "../utils/Constants";

const Contact = () => {
  const { dark } = useTheme();
  return (
    <>
      <Head>
        <title>{ pages.contact }</title>
      </Head>

      <div className="min-h-[90vh] flexcolcenter">
        <div
          className={`text-[3rem] font-bold tracking-[0.1rem] uppercase ${
            dark ? "text-white" : ""
          }`}
        >
          Feedback
        </div>
        <div className="flex flex-col items-center p-4">
          <h4
            className={`flex flex-wrap items-center justify-center gap-2 ${
              dark ? "text-white" : ""
            }`}
          >
            Or you can send me an email
            <div className={"text-red-600"}>natthaphol.uth@gmail.com</div>
          </h4>
          <div className={dark ? "text-white" : ""}>
            *** This form won&apos;t send to me ***
          </div>
        </div>
        <PostForm />
      </div>
    </>
  );
};

export default Contact;
