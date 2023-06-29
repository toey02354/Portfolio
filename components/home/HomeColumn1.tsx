import { useTheme } from "@/context/ThemeProvider";
import { names } from "@/assets/data/Constants";

const Column1 = () => {
  const { darkTheme } = useTheme();
  return (
    <div className="h-[100vh] FLEX-COL-CENTER gap-8">
      <div className={`text-[3rem] leading-none tracking-normal sm:tracking-widest sm:text-[5.2rem] font-bold ${darkTheme ? "text-white" : "HIGHLIGHT-TEXT"}`}>
        {names.firstName.toUpperCase()}
        <br />
        {names.lastName.toUpperCase()}
      </div>
      <div className={`text-2xl bg-white/20 blur-thing-2xl py-4 px-[2em] rounded-xl border-2 hover-shadow ${ darkTheme ? "text-white border-slate-500" : "border-highlight text-highlight font-[500]"}`}>
        {names.jobTitle}
      </div>
    </div>
  );
};

export default Column1;
