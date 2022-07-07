import { Divider } from "@mui/material";
import { EduCards } from "./CardItems";
import { useTheme } from "../../context/ThemeProvider";

const EduSlideCards = () => {
  const { dark } = useTheme();
  return (
    <div className="GroupCards">
      {EduCards.map((card, index) => (
        <div
          key={`educard-${index}`}
          className={`Card py-[2em] px-8 ${
            index % 2 == 0 ? "BlackCard" : "WhiteCard"
          } ${dark && "text-white"}`}
        >
          <div className="text-2xl font-bold skew-y-[3deg] text-center">
            <text>{card.title}</text>
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
