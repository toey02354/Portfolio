import { useContext } from "react";
import { ThemeContext } from "../Layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Home,
  Call,
  ViewInArRounded,
  LightMode,
  DarkMode,
  Lock,
} from "@mui/icons-material";

const NavItems = [
  {
    name: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <Call />,
  },
  {
    name: "Three",
    path: "/three",
    icon: <ViewInArRounded />,
  },
  {
    name: "Secret",
    path: "/test",
    icon: <Lock />,
  },
];

const Navbar = () => {
  const router = useRouter();
  const [dark, setDark] = useContext(ThemeContext);

  return (
    <div className="TW-DOMINANT-BG min-h-[8%] w-screen flex flex-row justify-between items-center py-4 px-6 text-xl text-white">
      <div className="flex flex-row items-center gap-8">
        <div className="hidden lg:flex justify-center items-center p-3 lg:py-2">
          <strong>TOEY</strong> Portfolio
        </div>
        <div className="flex flex-row gap-4">
          {NavItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <a
                className={"flex flex-row items-center gap-1 hover:text-amber-500 ".concat(
                  router.pathname == item.path ? "text-amber-600" : null
                )}
              >
                {item.icon} <div className="hidden xl:block">{item.name}</div>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex bg-slate-600 rounded-xl">
        <div
          className={`p-2 cursor-pointer rounded-xl transition-colors `.concat(
            !dark ? "TW-HIGHLIGHT-TEXT bg-slate-700" : null
          )}
        >
          <LightMode onClick={() => setDark((currVal) => !currVal)} />
        </div>
        <div
          className={`p-2 cursor-pointer rounded-xl transition-colors `.concat(
            dark ? "TW-HIGHLIGHT-TEXT bg-slate-700" : null
          )}
        >
          <DarkMode onClick={() => setDark((currVal) => !currVal)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
