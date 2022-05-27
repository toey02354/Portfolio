import ExpSlideCards from "../Cards/ExpCards";
import LogoAnimation from "../LogoAnimation";

const Column2 = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <LogoAnimation />
      </div>
      <div className="highlight-text w-screen flex justify-center items-center pt-[2rem] text-3xl uppercase font-bold drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)]">
        Skill {"&"} Experience
      </div>
      <div className="w-screen flex flex-row justify-start xl:justify-center items-center mb-[2rem]">
        <div className="xl:w-[50vw] flex flex-row overflow-x-scroll scroll-smooth my-[1rem] xl:mx-[15rem] p-3">
          <ExpSlideCards />
        </div>
      </div>
    </>
  );
};

export default Column2;
