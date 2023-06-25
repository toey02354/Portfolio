import { IconType } from "react-icons";
import { MdOutlineWork, MdHome, MdCall, MdLock } from "react-icons/md";

interface INavbar {
  name: string;
  path: string;
  icon: IconType;
}

export const NavItems: INavbar[] = [
  {
    name: "Home",
    path: "/",
    icon: MdHome,
  },
  {
    name: "Experience",
    path: "/experience",
    icon: MdOutlineWork,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: MdCall,
  },
  {
    name: "Secrets",
    path: "/test",
    icon: MdLock,
  },
];
