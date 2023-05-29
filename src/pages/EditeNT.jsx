import React from "react";
import { Link } from "react-router-dom";
import { cilHome } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import '../index.css'
function EditeNT() {
  return (
    <div>
      <section>
        <header className="create_header">
          <Link to={"/"}>
            <CIcon icon={cilHome} className="w10"></CIcon>
          </Link>
          <div className="mx-2">
          <button className="create-btn">save</button>
          <button className="create-btn delete">delete</button>
          </div>
        </header>
      </section>
      <section>
        <form action="" className="create__form">
          <input
            type="text"
            placeholder="Title..."
            className="create_inp"
            autoFocus
          />
          <textarea
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
