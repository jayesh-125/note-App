import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [first, setfirst] = useState([]);
  const [addMessage, setAddMessage] = useState("");
  const [send, setsend] = useState("Aonymias");
  const addMes = () => {
    if (addMessage.trim() !== "") {
      const message = { send: send, content: addMessage };
      setfirst([...first, message]);
      setAddMessage("");
    }
  };
  useEffect(() => {
    const chatScreen = document.getElementById("chatSc");
    chatScreen.scrollTop = chatScreen.scrollHeight;
  }, [first]);

  return (
    <>
      <div className="main">
        <div className="message" id="chatSc">
          {first.map((message, index) => (
            <div className="message" key={index}>
              <span>
                {message.send}: {message.content}{" "}
              </span>
              <i className="fa-solid fa-check"></i>
            </div>
          ))}
          <div className="mas">
            <button className="mic">
              <i className="fa-solid fa-microphone"></i>
            </button>
            <form action="">
              <input
                type="text"
                className="input_message"
                placeholder="Enter message.."
                value={addMessage}
                onChange={(e) => setAddMessage(e.target.value)}
              />
              <input
                type="text"
                className="input_message"
                placeholder="Enter message.."
                value={send}
                onChange={(e) => setsend(e.target.value)}
              />
              <button className="btn-md btn" onClick={addMes}>
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
