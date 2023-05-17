import React, { useState } from "react";
import "./App.css";

function Component1() {
  const [addText, setText] = useState("");
  const text = () => {
    const newText = addText.toUpperCase();
    setText(newText);
  };
  const lowerCase = () => {
    const newText = addText.toLowerCase();
    setText(newText);
  };

  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={addText}
          className="input_message m-2"
          onChange={changeText}
          name=""
          id=""
        />
        <br />
        <span>
          {addText.split(" ").length} charecters is {addText.length}
        </span>
        <br />
        <button className="m-3" onClick={text}>
          changetoUPPERCASE
        </button>
        <button className="m-3" onClick={lowerCase}>
          changetoLOWERCASE
        </button>
      </div>
      <hr />
    </>
  );
}
export default Component1;
