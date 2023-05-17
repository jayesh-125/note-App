import React ,{useState} from "react";
import "./App.css";

function Component1() {
  const [addText, setText] = useState("");
  const text = () => {
    const newText = addText.toUpperCase();
    setText(newText);
  };

  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <input type="text" value={addText} onChange={changeText} name="" id="" />
      <span>{text}</span>
      <button className="btn" onClick={text}>
        change
      </button>
    </div>
  );
}
export default Component1;
