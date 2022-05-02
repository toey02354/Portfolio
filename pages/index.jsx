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
