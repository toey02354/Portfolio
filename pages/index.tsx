import Head from "next/head";
import React from "react";

import { names, pages } from "@/assets/data/Constants";
import Column1 from "@/components/home/HomeColumn1";
import Column2 from "@/components/home/HomeColumn2";
import Column3 from "@/components/home/HomeColumn3";
import Experience from "../components/experience/Experience";

export default function Home(): React.ReactElement {
  return (
    <React.Fragment>
      <Head>
        <title>{pages.home}</title>
        <meta name="description" content={`${names.nickName} Portfolio`} />
        <meta property="og:title" content={`${names.nickName} Web Portfolio`} />
        <meta
          property="og:description"
          content={`${names.firstName} ${names.lastName}, web portfolio that contains my experiences`}
        />
        <meta property="og:image" content="/Images/profile.jpeg" />
        <meta property="og:type" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col pb-[8rem]">
        <Column1 />
        <Experience />
        <Column2 />
        <Column3 />
      </main>
    </React.Fragment>
  );
}
