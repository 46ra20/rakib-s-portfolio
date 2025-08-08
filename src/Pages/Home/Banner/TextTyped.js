import React from "react";
// import Typed from "react-typed";
import { ReactTyped } from "react-typed";

const TextTyped = () => {
  return (
    <div className="text-3xl font-semibold my-3">
      <div>
        <ReactTyped
          strings={[
            "Welcome To my portfolio...",
            "I'm a Jr. Penetration Tester",
            "Also I'm a....",
            "Software Developer...",
            "How can I help you?",
            "Please send me a massage...",
            "I will try to reply very soon...",
            "Thank you...",
          ]}
          typeSpeed={100}
          backSpeed={100}
          backDelay={2000}
          loop
        />
      </div>
    </div>
  );
};

export default TextTyped;
