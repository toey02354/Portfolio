import React from 'react'
import {
    Home,
    Call,
    ViewInArRounded,
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

export default NavItems