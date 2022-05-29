import React from "react";
import PostForm from "../components/PostForm";

const contact = () => {
  return (
    <div className="min-h-[88vh] flex flex-col justify-center items-center">
      <div className="text-[3rem] font-bold tracking-[0.1rem] uppercase">
        Feedback
      </div>
      <h4 className="flex flex-wrap items-center justify-center py-4 gap-4">
        or you can send me an email
        <div className="text-red-600">natthaphol.uth@gmail.com</div>
      </h4>
      <PostForm />
    </div>
  );
};

export default contact;
