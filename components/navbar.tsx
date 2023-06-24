import Link from "next/link";
import { useRouter } from "next/router";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { names, themeConstants } from "../assets/Constants";
import { useTheme } from "../context/ThemeProvider";
import NavItems from "./navbarItems";

const Navbar = () => {
  const router = useRouter();
  const { darkTheme, setDarkTheme } = useTheme();
  
  const changeTheme = () => {
    setDarkTheme(currDark => {
      localStorage.setItem(themeConstants.LOCAL_STORAGE_KEY, !currDark? themeConstants.DARK : themeConstants.LIGHT)
      return !currDark
    })
  }

  return (
    <div className="bg-main flex justify-between items-center py-4 px-6 text-xl text-white">
      <div className="flex items-center gap-8">
        <div className="hidden lg:flex lg:justify-center lg:items-center p-3">
          <strong>{names.nickName.toUpperCase()}</strong> <div>{ names.portfolio}</div>
        </div>
        <div className="flex gap-4">
          {NavItems.map((item) => (
            <Link href={item.path} key={item.name} passHref>
              <button className={`flex items-center gap-1 hover:text-amber-500 ${router.pathname == item.path ? "text-highlight" : ""}`}>
                {item.icon} <div className="hidden xl:block">{item.name}</div>
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div
        className="flex p-2 bg-slate-600 rounded-xl cursor-pointer text-highlight"
        onClick={changeTheme}
      >
        {darkTheme ? <MdDarkMode /> : <MdLightMode />}
      </div>
    </div>
  );
};

export default Navbar;
