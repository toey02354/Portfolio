import React from "react";
import { Divider } from "@mui/material";

const ExpSlideCards = () => {
  const headCardClass =
    "w-[100%] flex justify-center items-center py-3 text-xl font-[500]";

  const cards = [
    {
      title: <p className={headCardClass}>Skill {"&"} Experience</p>,
      content1: (
        <div className="text-[1.25rem]">
          <strong>Typescript, Javascript</strong>
          <p>React, NextJS, Redux</p>
          <p>NodeJS, ThreeJS</p>
          <p>ExpressJS, NestJS</p>
        </div>
      ),
      content2: (
        <div className="text-[1.25rem]">
          <strong>Python</strong>
          <p>Django, FastAPI</p>
          <p>PostgreSQL, MySQL</p>
          <p>MongoDB, Redis</p>
        </div>
      ),
    },
    {
      title: <p className={headCardClass}>ONESHOT, merchant platform</p>,
      content1: (
        <>
          <strong>Frontend</strong>
          <p>
            Created and Developed pages for users such as Login, Sign up, and
            Merchant detail
          </p>
          <p>Tech stack: Typescript, React, Vite, Material UI, TailwindCSS</p>
        </>
      ),
      content2: (
        <>
          <strong>Backend</strong>
          <p>Created and Developed a RESTFul API for this system</p>
          <p>Tech stack: Python, Django, MongoDB, PostgreSQL</p>
        </>
      ),
    },
    {
      title: <p className={headCardClass}>Payment Gateway Integration</p>,
      content1: <p>Integrated and created API for payments and transactions</p>,
      content2: (
        <p>
          Tech stack: Python, Django, REST framework and Salt (cryptography),
          Redis
        </p>
      ),
    },
    {
      title: <p className={headCardClass}>Card Game API</p>,
      content1: (
        <p>
          Created a callback API for game service to call and created an API to
          call game service
        </p>
      ),
      content2: (
        <p>
          Tech stack: in early using FastAPI and mongoDB, present using Django
          and PostgreSQL
        </p>
      ),
    },
    {
      title: <p className={headCardClass}>Bridgestone SD campaign</p>,
      content1: (
        <p>
          Extract text to find an amount and detail and validate sub-dealer by
          AI from invoices that upload by sub-dealers
        </p>
      ),
      content2: <p>Tech stack: Python, Google Vision, YOLOv5</p>,
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <div className="min-w-[350px] my-[1rem] mx-[0.5rem] bg-white rounded-xl">
          <div className="py-[0.5rem] px-[2rem] bg-slate-800 text-white rounded-t-xl">
            {card.title}
          </div>
          <div className="p-[2rem] rounded-xl">
            <div className="py-3">{card.content1}</div>
            <Divider />
            <div className="py-3">{card.content2}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExpSlideCards;
