import { HomeIcon, PhoneIcon, LockIcon, Code } from "../Icons";

const NavItems = [
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
