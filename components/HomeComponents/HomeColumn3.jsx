import EduSlideCards from "../Cards/EduCards";
import GithubProjectCards from "../Cards/GithubProjectCards";
import { useTheme } from "../../context/ThemeProvider";

const Column3 = () => {
  const { dark } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className={`Title ${dark ? "text-white" : "text-highlight"}`}>
        <p className="skew-y-[-3deg]">Github Project</p>
      </div>
      <GithubProjectCards />
      <div className={`Title ${dark ? "text-white" : "text-highlight"}`}>
        <p className="skew-y-[-3deg]">Educations</p>
      </div>
      <EduSlideCards />
    </div>
  );
};

export default Column3;
