import { Home, Call, Lock } from "@mui/icons-material";

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
    name: "Secret",
    path: "/test",
    icon: <Lock />,
  },
];

export default NavItems;
