import React from "react";
import PostForm from "../components/PostForm";

const contact = () => {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center">
      <div className="text-3xl font-semibold tracking-[0.07rem] uppercase">
        Feedback
      </div>
      <h4 className="flex flex-wrap items-center justify-center mb-5 mx-2">
        or you can send me an email
        <div className="ml-1 text-red-700">natthaphol.uth@gmail.com</div>
      </h4>
      <PostForm />
    </div>
  );
};

export default contact;
