import Link from "next/link";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";

const Navbar = () => {
  const router = useRouter();
  // CSS class
  const navMenuClass =
    "flex justify-between items-center py-2 px-4 hover:text-amber-500";
  const clickedClass = " bg-slate-700 rounded-2xl text-amber-600";
  const NavItems = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <CallIcon />,
    },
    {
      name: "Three",
      path: "/three",
      icon: <ViewInArRoundedIcon />,
    },
  ];

  return (
    <div className="dominant-bg min-h-[8%] w-screen flex flex-row justify-center lg:justify-start items-center p-4 pl-5 text-xl text-white">
      <div className="hidden lg:flex justify-center items-center p-3 lg:py-2 lg:px-20">
        <strong>TOEY</strong> Portfolio
      </div>
      <div className="flex flex-row">
        {NavItems.map((item) => (
          <Link href={item.path} key={item.name}>
            <a
              target="_parent"
              className={navMenuClass.concat(
                router.pathname == item.path ? clickedClass : ""
              )}
            >
              {item.icon} {item.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
