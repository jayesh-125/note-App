import React from 'react'

function Note() {
  return (
    <div>
      <section>
        <header className='header'>
          <h2 className='h2'>NOTE</h2>
          <div>
            <input type="text" className='inp' autoFocus placeholder='keyword...' />
            <button className='btn'>search</button>
          </div>
        </header>
      </section>
      <section>
        <div className="container">
          
        </div>
      </section>
    </div>
  )
}

export default Note
