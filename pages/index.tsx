import Head from "next/head";
import { FC } from "react";
// components
import Column1 from "../components/HomeComponents/HomeColumn1";
import Column2 from "../components/HomeComponents/HomeColumn2";
import Column3 from "../components/HomeComponents/HomeColumn3";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Toey Portfolio</title>
        <meta name="description" content="Toey Portfolio" />
        <meta property="og:title" content="Toey Web Portfolio" />
        <meta
          property="og:description"
          content="Natthaphol Uthumphirat, web portfolio that contains my experiences"
        />
        <meta property="og:image" content="/Images/profile.jpeg" />
        <meta property="og:type" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col pb-[8rem]">
        <Column1 />
        <Column2 />
        <Column3 />
      </main>
    </>
  );
};

export default Home;
