import React from 'react'
import "../navbar/Navbar.css"
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <section>


      <nav>
        <div className='container-navbar'>
          <div>
            <img src="https://i.im.ge/2022/08/03/FCY9Ir.LOGOBACKGROUNDWHITEROUND.png" className='logo-navbar' />
          </div>

          <div className='menu-navbar'>
            <a href='/'>Inicio</a>
            <a href='/habitaciones'>Habitaciones</a>
          </div>
        </div>
      </nav>



    </section >
  )
}

export default Navbar
