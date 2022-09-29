import { HomeIcon, PhoneIcon, LockIcon, Code } from "../Icons";

interface Navbar {
  name: string;
  path: string;
  icon: JSX.Element;
}

const NavItems: Navbar[] = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Experience",
    path: "/experience",
    icon: <Code />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <PhoneIcon />,
  },
  {
    name: "Secret",
    path: "/test",
    icon: <LockIcon />,
  },
];

export default NavItems;
