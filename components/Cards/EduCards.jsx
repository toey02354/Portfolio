import React from "react";
import { Divider } from "@mui/material";

const cards = [
  {
    title: <p className="TW-CARD-TITLE">Internship</p>,
    content1: (
      <>
        <strong>Kazanawa Institute of Technology</strong>
        <br />
        <strong> Sep 2019-Feb2020 | Japan</strong>
        <p>
          Research Assistant of Internet of Things Project, Fed4Iot Project, a
          research and innovation project jointly funded by the European
          Commission and Japan’s Ministry of Internal Affairs and Communication.
        </p>
      </>
    ),
    content2: (
      <p>
        Developed an IoT project name
        <br />
        Wildlife Animal Detection,
        <br />
        a research and development project within the period of 4 months I
        developed a project using RaspberryPi, Arduino, PLC, and a camera.
        <br /> Released a proposal to IEEE
      </p>
    ),
  },
  {
    title: <p className="TW-CARD-TITLE">Engineering</p>,
    content1: (
      <>
        <p>Suranaree University of Technology</p>
        <p>Graduated 2020 | Thailand</p>
        <p>
          Learn Programming, Micro Controller, Internet of Things, Electric
          waves, Signals, Electronic Circuits, Physics, Calculus, and
          Engineering subjects.
        </p>
      </>
    ),
    content2: (
      <p>
        gPBL 2018, an Exchange Program at Shibaura Institute of Technology,
        Omiya Campus, Japan A project-based learning program that solving the
        problem and find solutions for company and local businesses in Japan,
        working with people from 5 different countries.
      </p>
    ),
  },
];

const EduSlideCards = () => {
  return (
    <div className="flex flex-row overflow-x-scroll xl:justify-center gap-2 m-3">
      {cards.map((card, index) => (
        <div
          className="min-w-[400px] xl:w-[400px] bg-white rounded-xl"
          key={index}
        >
          <div className="TW-DOMINANT-BG flex justify-center py-2 px-4 text-white rounded-t-xl">
            {card.title}
          </div>
          <div className="p-[2rem] rounded-xl">
            <div className="py-4">{card.content1}</div>
            <Divider />
            <div className="py-4">{card.content2}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EduSlideCards;
