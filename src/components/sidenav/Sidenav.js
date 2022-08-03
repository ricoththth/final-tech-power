import React from 'react'
import './Sidenav.css'

function Sidenav() {
  return (
    <div>
        <nav class="sidebar close">
        <header>
            <div class="image-text">
            <span class="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkL2uBjC8242C6hlgjHpcqzs4DM52fyy75xvYgFpZs_S_98kwGdK1NezjOv4Pf597C9Co&usqp=CAU" alt=""/>
                </span>

                <div class="text logo-text">
                    <span class="name">Codinglab</span>
                    <span class="profession">Web developer</span>
                </div>
            </div>

            <i class='bx bx-chevron-right toggle'></i>
        </header>

        <div class="menu-bar">
            <div class="menu">


                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-home-alt icon' ></i>
                            <span class="text nav-text">Dashboard</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-bar-chart-alt-2 icon' ></i>
                            <span class="text nav-text">Revenue</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-bell icon'></i>
                            <span class="text nav-text">Notifications</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-pie-chart-alt icon' ></i>
                            <span class="text nav-text">Analytics</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-heart icon' ></i>
                            <span class="text nav-text">Likes</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-wallet icon' ></i>
                            <span class="text nav-text">Wallets</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div class="bottom-content">
                <li class="">
                    <a href="#">
                        <i class='bx bx-log-out icon' ></i>
                        <span class="text nav-text">Logout</span>
                    </a>
                </li>

                
                
            </div>
        </div>

    </nav>

    <section class="home">
        <div class="text">

        <div class="card-room">
                    <div class="container-cards">
                        <div class="card__items">
                            <div class="card__item" tabindex="0">
                                <a class="card__item-img" 
                                    target="_blank">
                                    <img src="https://cdn-img.readytotrip.com/t/1024x768/content/af/e2/afe29d8e2608a51fb640fd09ce1af5df8a26e5f8.jpeg"
                                        alt="img card" />
                                </a>
                                <a class="card__item-title" 
                                    target="_blank">
                                    Descanso tranquilo Habitacion economica
                                </a>
                                <div class="card__item-inner">
                                    <div class="card__item-views">
                                        <div class="views-count">
                                            $   10000
                                        </div>
                                    </div>
                                    <a class="card__item-btn"
                                         target="_blank" href='/reserva'>
                                        reserva
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    </section>

    </div>
  )
}

export default Sidenav


