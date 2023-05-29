import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Note from "./pages/Note";
import CreateNT from "./pages/CreateNT";
import EditeNT from "./pages/EditeNT";
const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Note />} />
          <Route path="/Add-Note" element={<CreateNT />} />
          <Route path="/Edit-Note/:id" element={<EditeNT />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
