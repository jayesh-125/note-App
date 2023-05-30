import React, { useEffect, useState } from "react";
import NoteIteam from "../Comp/NoteIteam";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilPlus, cilSearch, cilXCircle } from "@coreui/icons";
import "../index.css";
function Note({ notes }) {
  const [showinp, setShowinp] = useState(false);
  const [inp, setInp] = useState("");
  const [filterNote, setFilterNote] = useState(notes);

  const hdlSearch = () => {
    setFilterNote(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(inp.toLowerCase())) {
          return note;
        }
      })
    );
  };
  useEffect(hdlSearch, [inp]);
  return (
    <div>
      <section>
        <header className="header">
          <h2 className="h2">NOTE</h2>
          <div>
            {showinp && (
              <input
                value={inp}
                onChange={(e) => {
                  setInp(e.target.value);
                  hdlSearch();
                }}
                type="text"
                className="inp"
                autoFocus
                placeholder="keyword..."
              />
            )}
            <button
              className="btn"
              onClick={() => setShowinp((prevStste) => !prevStste)}
            >
              {showinp ? (
                <CIcon
                  icon={cilXCircle}
                  style={{ color: "green", width: "20px" }}
                  className="w10"
                />
              ) : (
                <CIcon
                  icon={cilSearch}
                  style={{ color: "green", width: "20px" }}
                  className="w10"
                />
              )}
            </button>
          </div>
        </header>
      </section>
      <section>
        <div className="container">

          {
            filterNote.length === 0 && <img src={require('../img-removebg-preview.png')} className="img-fluid" alt="img"/>
          }

          {filterNote.map((note) => (
            <NoteIteam key={note.id} note={note} />
          ))}
        </div>
      </section>
      <section>
        <Link to={"./Add-note"}>
          <CIcon icon={cilPlus} className="w10 add__btn" />
        </Link>
      </section>
    </div>
  );
}

export default Note;
