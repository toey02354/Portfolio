import Link from "next/link";
import { useRouter } from "next/router";
import { LightMode, DarkMode } from "../Icons";
import NavItems from "./NavItems";
import { useTheme } from "../../context/ThemeProvider";

const Navbar = () => {
  const router = useRouter();
  const { dark, setDark } = useTheme();

  return (
    <div className="bg-main flex justify-between items-center py-4 px-6 text-xl text-white">
      <div className="flex items-center gap-8">
        <div className="hidden lg:flex lg:justify-center lg:items-center p-3">
          <strong>TOEY</strong> <text>Portfolio</text>
        </div>
        <div className="flex gap-4">
          {NavItems.map((item) => (
            <Link href={item.path} key={item.name} passHref>
              <button
                className={`flex items-center gap-1 hover:text-amber-500 ${
                  router.pathname == item.path ? "text-highlight" : null
                }`}
              >
                {item.icon} <div className="hidden xl:block">{item.name}</div>
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div
        className="flex p-2 bg-slate-600 rounded-xl cursor-pointer text-highlight"
        onClick={() => setDark((currVal) => !currVal)}
      >
        {dark ? <DarkMode /> : <LightMode />}
      </div>
    </div>
  );
};

export default Navbar;
