import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { cilHome } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import "../index.css";
import createDATE from "../Comp/createDATE";

function EditeNT({ notes, setNotes }) {
  const { id } = useParams();
  console.log(id);
  const nt = notes.find((iteam) => iteam.id === id);
  const [title, setTitle] = useState(nt.title);
  const [details, setDetails] = useState(nt.details);
  const date = createDATE();
  const navi = useNavigate();

  const hdlForm = (e) => {
    e.prevDefault();
    if (title && details) {
      const newNote = { ...nt, title, details, date };
      const newNotes = notes.map((iteam) => {
        if (iteam.id === id) {
          iteam = newNote;
        }
        return iteam;
      });
      setNotes(newNotes);
    }
    // redirect to home page
    navi("/");
  };
  const hdlDelete = () => {
    if (window.confirm("are you sure to delete this note ?")) {
      const newNotes = notes.filter((iteam) => iteam.id !== id);
      setNotes(newNotes);
      navi("/");
    }
  };

  return (
    <div>
      <section>
        <header className="create_header">
          <Link to={"/"}>
            <CIcon icon={cilHome} className="w10"></CIcon>
          </Link>
          <div className="mx-2">
            <button className="create-btn" onClick={hdlForm}>
              save
            </button>
            <button className="create-btn delete" onClick={hdlDelete}>
              delete
            </button>
          </div>
        </header>
      </section>
      <section>
        <form action="" onSubmit={hdlForm} className="create__form">
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title..."
            className="create_inp"
            autoFocus
          />
          <textarea
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            className="create_textarea"
            placeholder="Note Details..."
            rows="10"
          ></textarea>
        </form>
      </section>
    </div>
  );
}

export default EditeNT;
