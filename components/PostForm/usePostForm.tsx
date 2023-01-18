import { EventHandler, FormEvent, KeyboardEventHandler, useState } from "react";
import { useRouter } from "next/router";

const initialValues = { title: "", content: "" };

const usePostForm = () => {
  const router = useRouter();
  const [values, setValues] = useState(initialValues);

  const handleSend = (event: FormEvent) => {
    event.preventDefault();
    if (values.title.trim() === "" || values.content.trim() === "") {
      return alert("Please Enter Data");
    }
    setValues(initialValues);
    router.replace("/thankyou");
  };

  return { values, setValues, handleSend };
};

export default usePostForm;
