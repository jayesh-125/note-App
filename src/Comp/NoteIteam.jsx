import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
function NoteIteam({note}) {
  return (
    <div className='note__iteam'>
        <Link to={`./Edit-Note/${note.id}`} className='note'>
            <h3 className='h3'>{note.title.length > 30 ? (note.title.substr(0,30))+'...' : note.title}</h3>
            {/* <p>{note.details}</p> */}
            <p>{note.date}</p>
        </Link>
    </div>
  )
}

export default NoteIteam
