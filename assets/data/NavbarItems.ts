import { IconType } from "react-icons";
import { MdHome, MdCode } from "react-icons/md";

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
    name: "To be implemented soon",
    path: "/test",
    icon: MdCode,
  },
];
