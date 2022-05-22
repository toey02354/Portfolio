import { useState } from "react";

const TypeWriter = function () {
  const queues = [];
  const typeSpeed = 50;
  const [text, setText] = useState("");

  this.text = text;

  this.typeString = (string) => {
    queues.push(() => {
      return new Promise((resolve) => {
        let i = 0;
        const letters = string.split("");
        const interval = setInterval(() => {
          setText((this.text += letters[i]));
          i++;
          if (i >= string.length) {
            console.log(this.text);
            clearInterval(interval);
            resolve();
          }
        }, typeSpeed);
      });
    });
    return this;
  };

  this.deleteChar = (numberToDelete) => {
    queues.push(() => {
      return new Promise((resolve) => {
        console.log(numberToDelete);
        resolve();
      });
    });
    return this;
  };
  this.deleteAll = (deletingSpeed) => {
    queues.push(() => {
      return new Promise((resolve) => {
        let i = 0;
        const interval = setInterval(() => {
          setText(this.text.slice(0, this.text.length - i));
          i++;
          if (i > this.text.length) {
            console.log("Deleted All");
            this.text = "";
            resolve();
            clearInterval(interval);
          }
        }, deletingSpeed);
      });
    });
    return this;
  };
  this.pauseFor = (durationToPause) => {
    queues.push(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, durationToPause);
      });
    });
    return this;
  };

  this.start = async function start() {
    for (let cb of queues) {
      await cb();
      if (false) queues.push(cb);
    }
    console.log("that: ", text);
    console.log("this: ", this.text);
  };
};

export default TypeWriter;
