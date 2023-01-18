import { MdOutlineWork, MdHome, MdCall, MdLock } from "react-icons/md";

interface INavbar {
  name: string;
  path: string;
  icon: JSX.Element;
}

const NavItems: INavbar[] = [
  {
    name: "Home",
    path: "/",
    icon: <MdHome />,
  },
  {
    name: "Experience",
    path: "/experience",
    icon: <MdOutlineWork />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <MdCall />,
  },
  {
    name: "Secret",
    path: "/test",
    icon: <MdLock />,
  },
];

export default NavItems;
