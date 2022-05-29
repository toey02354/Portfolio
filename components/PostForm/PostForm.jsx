import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const PostForm = () => {
  const initialValues = { title: "", content: "" };
  const [values, setValues] = useState(initialValues);

  const handleSend = (event) => {
    event.preventDefault();
    if (values.title.trim() === "" || values.content.trim() === "") {
      alert("Please Enter Data");
      return;
    }
    setValues(initialValues);
    window.location.assign("#/thankyou");
  };

  return (
    <div className="w-[80vw] xl:w-[30vw] mt-2 mb-10 mx-3 px-10 py-5 bg-white/60 drop-shadow-sm rounded-xl">
      <form
        className="flex flex-col items-center justify-center py-5"
        onKeyPress={(event) => {
          if (event.key == "Enter") {
            handleSend(event);
          }
        }}
      >
        <TextField
          fullWidth
          id="standard-basic"
          label="Title"
          placeholder="Enter Title Here"
          variant="outlined"
          required
          value={values.title}
          onChange={(event) =>
            setValues({ ...values, title: event.target.value })
          }
        />
        <br />
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Content"
          placeholder="Enter Content Here"
          variant="outlined"
          multiline
          rows={10}
          required
          value={values.content}
          onChange={(event) =>
            setValues({ ...values, content: event.target.value })
          }
        />
        <button
          className="flex flex-row items-center justify-center my-2 py-2 px-8 bg-sky-500 hover:bg-sky-600 drop-shadow-sm text-white rounded-xl"
          onClick={(event) => handleSend(event)}
        >
          Send <SendRoundedIcon sx={{ height: "1rem" }} />
        </button>
      </form>
    </div>
  );
};

export default PostForm;
