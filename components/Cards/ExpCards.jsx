import React from "react";
import { Divider } from "@mui/material";

const cards = [
  {
    title: <p className="TW-CARD-TITLE">Sompo</p>,
    content1: (
      <div>
        Created and Developed pages for admin <br />
        such as Login, Search, Update, Delete, Add <br />
        Fetch data from a RESTful API via Axios.
      </div>
    ),
    content2: (
      <div>
        Typescript, React, Redux, Axios, <br />
        Vite, Ant Ddesign, TailwindCSS, JWT
      </div>
    ),
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
    content1: (
      <div>
        Integrated the new payment method to the system
        <br /> Created a RESTful API to handle transactions
      </div>
    ),
    content2: (
      <div>
        Python, Django, REST framework, <br /> Salt (cryptography), Redis
      </div>
    ),
  },
  {
    title: (
      <p className="TW-CARD-TITLE">
        Card
        <br /> Game
        <br /> API
      </p>
    ),
    content1: (
      <div>
        Created a callback RESTful API for game service <br />
        Calculate point, redeem, refund from data <br />
        that the game sends to my API and send Response back
      </div>
    ),
    content2: (
      <div>
        Early: FastAPI and mongoDB, <br />
        Current: Django and PostgreSQL
      </div>
    ),
  },
  {
    title: (
      <p className="TW-CARD-TITLE">
        Bridgestone <br />
        SubDealer <br />
        campaign
      </p>
    ),
    content1: (
      <div>
        Extract text to find an amount and detail <br />
        Validate sub-dealer by AI from invoices <br />
        that upload by sub-dealers
      </div>
    ),
    content2: <div>Python, Google Vision, YOLOv5</div>,
  },
];

const ExpSlideCards = () => {
  return (
    <div className="flex flex-row overflow-x-scroll xl:grid xl:grid-cols-2 gap-2 m-3">
      <div
        className="min-w-full xl:h-[300px] flex flex-row bg-white rounded-xl"
        key={99}
      >
        <div className="TW-DOMINANT-BG px-4 text-white rounded-l-xl">
          <p className="TW-CARD-TITLE">Skill</p>
        </div>
        <div className="px-6 w-full">
          <div className="py-4">
            <div>
              <strong className="font-bold text-xl">
                Typescript, Javascript
              </strong>
              <p>React, NextJS, Redux</p>
              <p>NodeJS,ExpressJS, NestJS</p>
              <p>ThreeJS, ChartJS</p>
            </div>
          </div>
          <Divider />
          <div className="py-4">
            <div>
              <strong className="font-bold text-xl">Python</strong>
              <p>Django, FastAPI</p>
              <p>PostgreSQL, MySQL</p>
              <p>MongoDB, Redis</p>
            </div>
          </div>
        </div>
      </div>
      {cards.map((card, index) => (
        <div
          className="min-w-full xl:h-[300px] flex flex-row bg-white rounded-xl"
          key={index}
        >
          <div className="TW-DOMINANT-BG px-4 text-white rounded-l-xl">
            {card.title}
          </div>
          <div className="px-6 w-full">
            <div className="py-4">
              <div className="font-bold text-xl pb-2 uppercase">Detail</div>
              {card.content1}
            </div>
            <Divider />
            <div className="py-4">
              <div className="font-bold text-xl pb-2 uppercase">Tech Stack</div>
              {card.content2}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpSlideCards;
