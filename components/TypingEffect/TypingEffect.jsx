import React, { useState, useEffect } from "react";

const TypingEffect = (props) => {
  const letters = props.sentence.slice("");
  const typeQueues = [];
  const deleteQueues = [];
  const [text, setText] = useState("");

  const handleStart = async () => {
    typeQueues.push(() => {
      return new Promise((resolve) => {
        let i = 0;
        const interval = setInterval(() => {
          setText((text += letters[i]));
          i++;
          if (i >= letters.length) {
            resolve();
            clearInterval(interval);
          }
        }, props.delay);
      });
    });
    for (let queue of typeQueues) {
      await queue();
    }
  };

  const handleDelete = async () => {
    deleteQueues.push(() => {
      return new Promise((resolve) => {
        let i = 0;
        const interval = setInterval(() => {
          setText(text.slice(0, letters.length - i));
          i++;
          if (i > letters.length) {
            resolve();
            clearInterval(interval);
          }
        }, props.delay);
      });
    });
    for (let deleteCB of deleteQueues) {
      await deleteCB();
    }
  };

  const starto = async () => {
    await handleStart();
    await handleDelete();
  };

  useEffect(() => {
    starto();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-[2rem]">
      <div className="flex flex-row gap-[2rem] mt-[2rem]">
        <button
          onClick={starto}
          className="w-[100px] h-[50px] bg-[#ffafaf] rounded-xl"
        >
          Start
        </button>
        <button
          onClick={handleStart}
          className="w-[100px] h-[50px] bg-[#ffafaf] rounded-xl"
        >
          Type!
        </button>
        <button
          onClick={handleDelete}
          className="w-[100px] h-[50px] bg-[#ffafaf] rounded-xl"
        >
          Delete!
        </button>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default TypingEffect;
