import "./App.css";
import React, {useState} from 'react';
function App() {
  const [first, setfirst] = useState('');
  const handle = (event)=>{
    setfirst(event.target.value);
  }
  const store = ()=>{
    localStorage.setItem("message",first)
  }
  
  return (
    <>
      <div className="main">
        <div className="message">
          <div className="sp">
            <span>{first}</span>
            <i className="fa-solid fa-check"></i>
          </div>
          <div className="mas">
            <button className="mic">
              <i className="fa-solid fa-microphone"></i>
            </button>
            <form action="">
              <input
                type="text"
                className="input_message"
                placeholder="Enter message.."
                value={first}
                onChange={handle}
              />
              <button className="btn-md btn" onClick={store}>
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
