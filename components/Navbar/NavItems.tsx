import { MdOutlineWork, MdHome, MdCall, MdLock } from "react-icons/md";

interface Navbar {
  name: string;
  path: string;
  icon: JSX.Element;
}

const NavItems: Navbar[] = [
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
