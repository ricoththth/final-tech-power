import React from 'react'
import "../Footer/Footer.css"

function Footer() {
    return (
        <div className='sections-footer'>

            <div className='logo'>
                <img src="https://i.postimg.cc/Z5JQdkCT/logo2.png" alt='logo azul con campana y nombre de Hotellia' />
                 
            </div>

            <div className='menu-footer'>
                <li>abcd road,abcd city, abcd </li>
                <li>+91 1234567890</li>
                <li>sheraton@gmail.com</li>
            </div>

            <div className='menu-footer'>
                <li>About US</li>
                <li>Contact</li>
                <li>Terms / Conditions</li>
            </div>

            <div className='menu-footer'>
                <li> <i class="fa-brands fa-instagram"></i> Instagram</li>
                <li><i class="fa-brands fa-twitter"></i> Twitter</li>
                <li> <i class="fa-brands fa-facebook"></i> Facebook</li>
            </div>

            <div className='menu-footer'>
                <li>Suscribete al newsletter</li>
                <li>   _____________</li>
                
                <input></input>
            </div>

        </div>
    )
}

export default Footer