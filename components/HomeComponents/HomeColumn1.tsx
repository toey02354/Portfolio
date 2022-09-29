import { useTheme } from "../../context/ThemeProvider";

const Column1 = () => {
  const { dark } = useTheme();
  return (
    <div className="h-[100vh] flexcolcenter gap-8">
      <div
        className={`text-[3rem] leading-none tracking-normal sm:tracking-widest sm:text-[5.2rem] font-bold 
                        ${dark ? "text-white" : "HIGHLIGHT-TEXT"}`}
      >
        NATTHAPHOL
        <br />
        UTHUMPHIRAT
      </div>
      <div
        className={`text-2xl bg-white/20 blur-thing-2xl py-4 px-[2em] rounded-xl border-2 hover-shadow ${
          dark
            ? "text-white border-slate-500"
            : " border-highlight text-highlight font-[500]"
        }`}
      >
        A fullstack developer
      </div>
    </div>
  );
};

export default Column1;
