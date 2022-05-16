import Head from "next/head";
// components
import Column1 from "../components/HomeColumn1";
import Column2 from "../components/HomeColumn2";
import Column3 from "../components/HomeColumn3";

const Home = () => {
  return (
    <>
      <Head>
        <title>Toey Portfolio</title>
        <meta name="description" content="Toey Portfolio" />
        <meta
          property="og:url"
          content="https://toey-portfolio.vercel.app/"
        ></meta>
        <meta property="og:title" content="Toey Web Portfolio"></meta>
        <meta
          property="og:description"
          content="Natthaphol Uthumphirat, web portfolio that contains my experiences"
        ></meta>
        <meta property="og:image" content="/images/profile.jpeg"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col">
        <Column1 />
        <Column2 />
        <Column3 />
      </main>
    </>
  );
};

export default Home;
