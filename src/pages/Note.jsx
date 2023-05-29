import React from 'react'
import dummyNotes from '../dummyNotes'
import NoteIteam from '../Comp/NoteIteam'
function Note() {
  return (
    <div>
      <section>
        <header className='header'>
          <h2 className='h2'>NOTE</h2>
          <div>
            {/* <input type="text" className='inp' autoFocus placeholder='keyword...' /> */}
            <button className='btn'>search</button>
          </div>
        </header>
      </section>
      <section>
        <div className="container">
          {
            dummyNotes.map(note => <NoteIteam key={note.id} note = {note} />)
          }
        </div>
      </section>
      <section>
        <button className="btn add__btn">Add Note</button>
      </section>
    </div>
  )
}

export default Note
