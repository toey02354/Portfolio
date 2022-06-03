import React from "react";
import { Divider } from "@mui/material";

const cards = [
  {
    title: <p className="TW-CARD-TITLE">Skill</p>,
    content1: (
      <div>
        <strong>Typescript, Javascript</strong>
        <p>React, NextJS, Redux</p>
        <p>NodeJS, ThreeJS</p>
        <p>ExpressJS, NestJS</p>
      </div>
    ),
    content2: (
      <div>
        <strong>Python</strong>
        <p>Django, FastAPI</p>
        <p>PostgreSQL, MySQL</p>
        <p>MongoDB, Redis</p>
      </div>
    ),
  },
  {
    title: <p className="TW-CARD-TITLE">Sompo</p>,
    content1: `Created and Developed pages for admin such as Login and Sign up. Fetch data from a RESTful API via Axios.`,
    content2: `Tech stack: Typescript, React, Redux, Axios, Vite, Ant Ddesign, TailwindCSS, JWT`,
  },
  {
    title: (
      <p className="TW-CARD-TITLE">
        Payment
        <br />
        Gateway
        <br />
        Integration
      </p>
    ),
    content1: `Integrated and created API for payments and transactions`,
    content2: `Tech stack: Python, Django, REST framework and Salt (cryptography), Redis`,
  },
  {
    title: (
      <p className="TW-CARD-TITLE">
        Card
        <br /> Game
        <br /> API
      </p>
    ),
    content1: `Created a callback API for game service to call and created an API tocall game service`,
    content2: `Tech stack: in early using FastAPI and mongoDB, present using Django and PostgreSQL`,
  },
  {
    title: (
      <p className="TW-CARD-TITLE">
        Bridgestone
        <br />
        SubDealer
        <br />
        campaign
      </p>
    ),
    content1: `Extract text to find an amount and detail and validate sub-dealer by AI from invoices that upload by sub-dealers`,
    content2: `Tech stack: Python, Google Vision, YOLOv5`,
  },
];

const ExpSlideCards = () => {
  return (
    <div className="flex flex-row overflow-x-scroll xl:grid xl:grid-cols-2 gap-2 m-3">
      {cards.map((card, index) => (
        <div
          className="min-w-full h-[300px] flex flex-row bg-white rounded-xl"
          key={index}
        >
          <div className="TW-DOMINANT-BG px-4 text-white rounded-l-xl">
            {card.title}
          </div>
          <div className="px-6 w-full ">
            <div className="py-4">{card.content1}</div>
            <Divider />
            <div className="py-4">{card.content2}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpSlideCards;
