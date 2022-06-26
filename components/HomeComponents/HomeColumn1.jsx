import { Grow } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../Layout/Layout";

const Column1 = () => {
  const [dark] = useContext(ThemeContext);
  return (
    <Grow in>
      <div className="IMG-BG h-[100vh] flex flex-col justify-center items-center">
        <div className={`text-5xl tracking-widest sm:text-[5.2rem] font-bold 
                        ${dark ? "text-white" : "TW10P-BG-GRAD"}`}>
          NATTHAPHOL
          <br />
          UTHUMPHIRAT
        </div>
      </div>
    </Grow>
  );
};

export default Column1;
