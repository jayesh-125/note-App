import React, { useState } from "react";
import './App.css'
const Navbar = () => {
  const[textBox,setTextBox] = useState('');
  return (
    <>
      <div className="d-flex">
        <h2 className="h2">NoteApp</h2>
        <button className="btn btn-sm" onClick={()=>{
          setTextBox(true)
        }}>Add Note</button>
      </div>
        <div className="d-flex flex-column">
        {textBox && <textarea name="" id="" cols="40" rows="5"></textarea>}
        <button className="my-3 col-3 btn offset-9">save</button>
        </div>
    </>
  );
};

export default Navbar;
