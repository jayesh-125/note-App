import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import CIcon from '@coreui/icons-react'
import { cilHome } from '@coreui/icons'

function CreateNT() {
  return (
    <div>
      <section>
        <header className='create_header'>
          <Link to={'/'}><CIcon icon={cilHome} className='w10'></CIcon></Link>
          <button className="create-btn">save</button>
        </header>
      </section>
      <section>
        <form action="" className="create__form">
          <input type="text" placeholder='Title...' className='create_inp' autoFocus />
          <textarea className='create_textarea' placeholder='Note Details...' rows="10"></textarea>
        </form>
      </section>
    </div>
  )
}

export default CreateNT
