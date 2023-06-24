import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import { useTheme } from "../../context/ThemeProvider";

const ScrollToTop = () => {
  const [show, setShow] = useState<boolean>(false);
  const { darkTheme } = useTheme();

  const handleTop = () => {
    scrollTo({ behavior: "smooth", top: 0 });
  };

  const listenScroll = () => {
    if (scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    addEventListener("scroll", listenScroll);
    return () => removeEventListener("scroll", listenScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-0 right-0 m-4 p-2 rounded-full shadow-lg 
                ${show ? "block" : "hidden"} 
                ${darkTheme ? "bg-white" : "bg-main text-white"}`}
      onClick={handleTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
