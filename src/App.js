import "./App.css";
function App() {
  return (
    <>
      <div className="main">
        <div className="message">
          <div className="sp">
            <span> </span>
            <i class="fa-solid fa-check"></i>
          </div>
          <div className="mas">
            <button className="mic">
              <i class="fa-solid fa-microphone"></i>
            </button>
            <form action="">
              <input
                type="text"
                className="input_message"
                placeholder="Enter message.."
                name=""
                id="im"
              />
              <button className="btn-md btn" type="submit">
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