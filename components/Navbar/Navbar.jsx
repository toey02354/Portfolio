import { useContext } from "react";
import { ThemeContext } from "../Layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  LightMode,
  DarkMode,
} from "@mui/icons-material";
import NavItems from "./NavItems";

const Navbar = () => {
  const router = useRouter();
  const [dark, setDark] = useContext(ThemeContext);

  return (
    <div className="TW-DOMINANT-BG flex justify-between items-center py-4 px-6 text-xl text-white">
      <div className="flex items-center gap-8">
        <div className="hidden lg:flex lg:justify-center lg:items-center p-3">
          <strong>TOEY</strong> <text>Portfolio</text>
        </div>
        <div className="flex gap-4">
          {NavItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <button className={`flex items-center gap-1 hover:text-amber-500 ${router.pathname == item.path ? "text-amber-600" : null}`}>
                {item.icon} <div className="hidden xl:block">{item.name}</div>
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex bg-slate-600 rounded-xl" onClick={() => setDark(currVal => !currVal)}>
        <div className={`relative p-2 cursor-pointer ${!dark ? "TW-HIGHLIGHT-TEXT bg-slate-700 rounded-xl" : null}`}>
          <LightMode />
        </div>
        <div className={`p-2 cursor-pointer ${dark ? "TW-HIGHLIGHT-TEXT bg-slate-700 rounded-xl" : null}`}>
          <DarkMode />
          {/* <div className={`absolute top-0 left-0 z-[-1] h-[50px] w-[50px] bg-slate-900/50`} /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
