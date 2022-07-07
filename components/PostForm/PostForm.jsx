import usePostForm from "./usePostForm";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const PostForm = () => {
  const { values, setValues, handleSend } = usePostForm();

  return (
    <div
      className={
        "w-full max-w-[400px] md:max-w-[500px] rounded-xl bg-main/60 shadow-xl backdrop-blur-xl"
      }
    >
      <form
        autoComplete="off"
        className="flex flex-col items-center justify-center gap-4 p-8"
        onKeyPress={(event) => {
          if (event.key == "Enter") handleSend(event);
        }}
      >
        <input
          placeholder="Enter Title Here"
          type="text"
          name="Title"
          className="w-full p-2 rounded-lg bg-slate-700/40 focus:outline-none focus:bg-slate-700 text-white"
          value={values.title}
          onChange={(event) =>
            setValues({ ...values, title: event.target.value })
          }
        />
        <textarea
          rows={10}
          placeholder="Enter Content Here"
          name="Title"
          className="w-full p-2 rounded-lg resize-none bg-slate-700/40 focus:outline-none focus:bg-slate-700 text-white"
          value={values.content}
          onChange={(event) =>
            setValues({ ...values, content: event.target.value })
          }
        />
        <button
          onClick={(event) => handleSend(event)}
          className="flex items-center justify-center py-2 px-8 drop-shadow-sm rounded-xl bg-slate-700/40 text-white hover:bg-slate-700"
        >
          <p>Send</p> <SendRoundedIcon sx={{ height: "1rem" }} />
        </button>
      </form>
    </div>
  );
};

export default PostForm;
