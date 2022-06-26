import { ExpCards } from "./CardItems";

const ExpSlideCards = () => {
  return (
    <div className="flex flex-col gap-4">
      {ExpCards.map((card, index) => (
        <div key={`expcard-${index}`}
          className={`TW-CARDS py-[4rem] px-8 ${index % 2 == 0 ? "TW-DARK-CARDS" : "TW-WHITE-CARDS"}`}
        >
          <div className="text-2xl font-bold skew-y-[3deg] text-center">
            <text className="border-b-2">{card[0]}</text>
          </div>
          <ul key="detail" className="skew-y-[3deg] list-disc px-8">
            {card[1].map((detail, index) => (
              <div key={`detail-${index}`}>
                {index === card[1].length - 1 && (
                  <div> <strong>TECH STACK</strong>: {detail} </div>
                )}
                {index !== card[1].length - 1 && <li>{detail}</li>}
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExpSlideCards;
