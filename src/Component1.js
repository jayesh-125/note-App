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
      <input type="text" value={addText} className="input_message m-2" onChange={changeText} name="" id="" />
      <br />
      <span>{addText.split(" ").length} charecters is {addText.length}</span>
      <button className="m-3" onClick={text}>
        changetoUPPERCASE
      </button>
    </div>
  );
}
export default Component1;
