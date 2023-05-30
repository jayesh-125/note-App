import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import CIcon from "@coreui/icons-react";
import { cilHome } from "@coreui/icons";
import { v4 as uuid } from "uuid";
import createDATE from "../Comp/createDATE";

function CreateNT({setNotes}) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = createDATE()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(title && details){
      const note = {
        id : uuid(),title,details,date
      }
      // add note data in array
      setNotes(prevNotes => [note, ...prevNotes])
      // redirect to home
      navigate('/')
      console.log(note)
    }

  }
  return (
    <div>
      <section>
        <header className="create_header">
          <Link to={"/"}>
            <CIcon icon={cilHome} className="w10"></CIcon>
          </Link>
          <button className="create-btn" onClick={handleSubmit}>save</button>
        </header>
      </section>
      <section>
        <form action="" className="create__form"
        onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Title..."
            className="create_inp"
            autoFocus
          />
          <textarea
            className="create_textarea"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            placeholder="Note Details..."
            rows="10"
          ></textarea>
        </form>
      </section>
    </div>
  );
}

export default CreateNT;
