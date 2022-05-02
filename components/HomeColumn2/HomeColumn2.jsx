import ExpSlideCards from "../Cards/ExpCards";

const Column2 = () => {
  return (
    <>
      <div className="w-screen flex justify-center items-center pt-[2rem] text-3xl uppercase font-bold bg-clip-text text-amber-600 drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)]">
        Skill {"&"} Experience
      </div>
      <div className="w-screen flex flex-row justify-start xl:justify-center items-center mb-[2rem]">
        <div className="flex flex-row overflow-x-scroll scroll-smooth my-[1rem] xl:mx-[15rem] p-3">
          <ExpSlideCards />
        </div>
      </div>
    </>
  );
};

export default Column2;
