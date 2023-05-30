import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import Note from "./pages/Note";
import CreateNT from "./pages/CreateNT";
import EditeNT from "./pages/EditeNT";
import { useEffect, useState } from "react";

const App = () => {
  const[notes,setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes))
  },[notes])
  console.log(notes)

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Note notes={notes} />} />
          <Route path="/Add-Note" element={<CreateNT setNotes={setNotes} />} />
          <Route path="/Edit-Note/:id" element={<EditeNT notes={notes} setNotes={setNotes} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
