import { Divider } from "@mui/material";
import { EduCards } from "./CardItems";

const EduSlideCards = () => {
  return (
    <div className="flex flex-col gap-4">
      {EduCards.map((card, index) => (
        <div key={`educard-${index}`}
          className={`TW-CARDS py-[4rem] px-8 ${index % 2 == 0 ? "TW-DARK-CARDS" : "TW-WHITE-CARDS"}`}  
        >
          <div className="text-2xl font-bold skew-y-[3deg] text-center">
            <text className="border-b-2">{card.title}</text>
          </div>
          <div className="skew-y-[3deg]">
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
