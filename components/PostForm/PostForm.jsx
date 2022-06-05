import React, { useState, useContext } from "react";
import { ThemeContext } from "../Layout/Layout";
import { useRouter } from "next/router";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const initialValues = { title: "", content: "" };

const PostForm = () => {
  const [dark] = useContext(ThemeContext);
  const router = useRouter();
  const [values, setValues] = useState(initialValues);

  const formTheme = dark
    ? "bg-gray-200 focus:outline-blue-200"
    : "bg-slate-700 focus:outline-none text-white";

  const handleSend = (event) => {
    event.preventDefault();
    if (values.title.trim() === "" || values.content.trim() === "") {
      alert("Please Enter Data");
      return;
    }
    setValues(initialValues);
    router.replace("/thankyou");
  };

  return (
    <div
      className={"w-[80vw] xl:w-[30vw] rounded-lg ".concat(
        dark ? "bg-white" : "TW-DOMINANT-BG"
      )}
    >
      <form
        autoComplete="off"
        className="flex flex-col items-center justify-center gap-4 px-8 py-8"
        onKeyPress={(event) => {
          if (event.key == "Enter") {
            handleSend(event);
          }
        }}
      >
        <input
          className={"w-full p-2 rounded-lg ".concat(formTheme)}
          placeholder="Enter Title Here"
          type="text"
          value={values.title}
          onChange={(event) =>
            setValues({ ...values, title: event.target.value })
          }
          name="Title"
        />
        <textarea
          className={"w-full p-2 rounded-lg resize-none ".concat(formTheme)}
          rows={10}
          placeholder="Enter Content Here"
          value={values.content}
          onChange={(event) =>
            setValues({ ...values, content: event.target.value })
          }
          name="Title"
        />
        <button
          className={"flex flex-row items-center justify-center py-2 px-8 drop-shadow-sm rounded-xl ".concat(
            dark
              ? "bg-gray-200 hover:bg-gray-400"
              : "bg-slate-700 text-white hover:bg-slate-500"
          )}
          onClick={(event) => handleSend(event)}
        >
          <p>Send</p> <SendRoundedIcon sx={{ height: "1rem" }} />
        </button>
      </form>
    </div>
  );
};

export default PostForm;
