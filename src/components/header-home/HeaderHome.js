import React from 'react'
import "./HeaderHome.css"
import { Link } from "react-router-dom";


function HeaderHome() {
  return (
        <div class="form-banner">
        <div class="content-banner">
            <h3>Bienvenidos a</h3>
            <h1>Hotelia</h1>
            <h2>Encuentra las mejores habitaciones</h2>
            <Link to="/habitaciones"><button> Reserva</button></Link>
        </div>
    </div>
  )
}

export default HeaderHome