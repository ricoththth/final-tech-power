import React from 'react'
import './Filtersroom.css'


function Filtersroom() {
    return (
        <div className='everything-rooms'>
            <div className='filters-section'>
                <div class="container-fluid">
                    <div class="row" id="fs_app">
                        <section class="col-12" id="fs_price_body">
                            <div>
                                <span class="heading">
                                    Precio
                                </span>
                                <div class="row">
                                    <div class="col-4">
                                        <button class="btn" type="button">$</button>
                                    </div>
                                    <div class="col-4 active">
                                        <button class="btn" type="button">$$</button>
                                    </div>
                                    <div class="col-4">
                                        <button class="btn" type="button">$$$</button>
                                    </div>
                                </div>
                                <div class="line"></div>
                                <div class="line1"></div>
                                <div>
                                    <ul>
                                        <li>Enero</li>
                                        <li>Mayo</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section class="col-12" id="fs_distance_body">
                            <span class="heading">
                                Adultos
                            </span>
                            <div class="contents">
                                <ul>
                                    <li>
                                        <span>Una </span>
                                        <span class="text-right"></span>
                                    </li>
                                    <li class="active">
                                        <span>Dos</span>
                                        <span class="text-right">
                                            <i class="fa fa-check"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span>Tres</span>
                                        <span class="text-right"></span>
                                    </li>
                                    <li>
                                        <span>Cuatro</span>
                                        <span class="text-right"></span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section class="col-12" id="fs_time_body">
                            <span class="heading">
                                Niños
                            </span>
                            <div class="contents">
                                <ul>
                                    <li>
                                        <span>Uno</span>
                                        <span class="text-right"></span>
                                    </li>
                                    <li>
                                        <span>Dos</span>
                                        <span class="text-right"></span>
                                    </li>
                                    <li class="active">
                                        <span>Tres</span>
                                        <span class="text-right">
                                            <i class="fa fa-check"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section class="col-12" id="fs_rating">
                            <span class="heading">
                                Estrellas
                            </span>
                            <div class="contents">
                                <ul>
                                    <li>
                                        <span>
                                            <i class="fa fa-star dark"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </span>
                                        <span class="text-right"></span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class="fa fa-star dark"></i>
                                            <i class="fa fa-star dark"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </span>
                                        <span class="text-right"></span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
            <div className='rooms-section'>


                <div class="card">
                    <div class="container-cards">
                        <div class="card__items">
                            <div class="card__item" tabindex="0">
                                <a class="card__item-img" 
                                    target="_blank">
                                    <img src="https://upper-room-hotel.de/files/sgwa.plugin.embeddablegallery.model.Galleryphoto/image/52/54/01.jpg"
                                        alt="img card" />
                                </a>
                                <a class="card__item-title" 
                                    target="_blank">
                                    Semi Suite Preferencial Marymas
                                </a>
                                <div class="card__item-inner">
                                    <div class="card__item-views">
                                        <div class="views-count">
                                            $   220000
                                        </div>
                                    </div>
                                    <a class="card__item-btn" href="">
                                    reserva
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                
                <div class="card">
                    <div class="container-cards">
                        <div class="card__items">
                            <div class="card__item" tabindex="0">
                                <a class="card__item-img" 
                                    target="_blank">
                                    <img src="https://pix10.agoda.net/hotelImages/168345/-1/1b2f085541f8fdbfefdeeb2e3f7d8d0e.jpg?ca=11&ce=1&s=1024x768"
                                        alt="img card" />
                                </a>
                                <a class="card__item-title" 
                                    target="_blank">
                                    Midi Suite Preferencial Marymas
                                </a>
                                <div class="card__item-inner">
                                    <div class="card__item-views">
                                        <div class="views-count">
                                            $   160000
                                        </div>
                                    </div>
                                    <a class="card__item-btn"
                                         target="_blank">
                                        reserva
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="container-cards">
                        <div class="card__items">
                            <div class="card__item" tabindex="0">
                                <a class="card__item-img" 
                                    target="_blank">
                                    <img src="https://image-tc.galaxy.tf/wijpeg-9jdmohy1a4uqzxzyjry2enpz6/wide.jpg?crop=0%2C117%2C1920%2C1080"
                                        alt="img card" />
                                </a>
                                <a class="card__item-title"
                                    target="_blank">
                                    Doble Cuarto 
                                </a>
                                <div class="card__item-inner">
                                    <div class="card__item-views">
                                        <div class="views-count">
                                            $   190000
                                        </div>
                                    </div>
                                    <a class="card__item-btn"
                                         target="_blank">
                                        reserva
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
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
        </div>
    )
}

export default Filtersroom