import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const PostForm = () => {
  const [getTitle, setTitle] = useState("");
  const [getContent, setContent] = useState("");

  const handleSend = (event) => {
    event.preventDefault();
    if (getTitle === "" || getContent === "") {
      alert("Please Enter Data");
      return;
    }
    setTitle("");
    setContent("");
    window.location.assign("#/thankyou");
  };

  return (
    <div className="w-[80vw] xl:w-[30vw] mt-2 mb-10 mx-3 px-10 py-5 bg-stone-600/10 drop-shadow-sm rounded-xl">
      <div
        className="flex flex-col items-center justify-center py-3"
        onKeyPress={(event) => {
          if (event.key == "Enter") {
            handleSend(event);
          }
        }}
      >
        <TextField
          className="w-[100%]"
          id="standard-basic"
          label="Title"
          placeholder="Enter Title Here"
          variant="filled"
          required
          value={getTitle}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <TextField
          className="w-[100%]"
          id="outlined-multiline-static"
          label="Content"
          placeholder="Enter Content Here"
          variant="filled"
          multiline
          rows={10}
          required
          value={getContent}
          onChange={(event) => setContent(event.target.value)}
        />
        <button
          className="flex flex-row items-center justify-center my-2 py-2 px-8 bg-sky-500 hover:bg-sky-600 drop-shadow-sm text-white rounded-xl"
          onClick={(event) => handleSend(event)}
        >
          Send <SendRoundedIcon sx={{ height: "1rem" }} />
        </button>
      </div>
    </div>
  );
};

export default PostForm;
