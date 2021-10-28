import React, { Component } from 'react'
import banner1 from '../../assets/images/Untitled.png';
import banner2 from '../../assets/images/Untitled1.png';
import banner3 from '../../assets/images/Untitled2.png';

export default class Banner extends Component {
  render() {
    return (
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={banner1} class="d-block w-100 img-1 " alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h3>Pick Your Destination</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est</p>
              <button className="button-learn-more">LEARN MORE</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src={banner2} class="d-block w-100 img-1 " alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h3>Book Your Trip</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!</p>
              <button className="button-learn-more">LEARN MORE</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src={banner3} class="d-block w-100 img-1" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h3>Relax And Enjoy</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!</p>
              <button className="button-learn-more">LEARN MORE</button>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
}
