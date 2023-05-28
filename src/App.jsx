import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css'
import Note from './pages/Note'
import CreateNT from './pages/CreateNT'
import EditeNT from './pages/EditeNT'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Note/>}/>
            <Route path='/Add-Note' element={<CreateNT/>}/>
            <Route path='/Edit-Note' element={<EditeNT/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
