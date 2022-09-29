import { EventHandler, FormEvent, KeyboardEventHandler, useState } from "react";
import { useRouter } from "next/router";

const initialValues = { title: "", content: "" };

const usePostForm = () => {
  const router = useRouter();
  const [values, setValues] = useState(initialValues);

  const handleSend = (event: any) => {
    event.preventDefault();
    if (values.title.trim() === "" || values.content.trim() === "") {
      alert("Please Enter Data");
      return;
    }
    setValues(initialValues);
    router.replace("/thankyou");
  };

  return { values, setValues, handleSend };
};

export default usePostForm;
