import React from 'react'
import { Carousel } from 'react-bootstrap'
import './EstiloS.css';

const slider = () => {
    return (
        <Carousel className = "Carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.fondoemprender.com/SiteAssets/SitePages/carrera4k/4k%2001%20QR%20portada.png"
      alt="First slide"
      width = "1000px"
      height = "500px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ytimg.com/vi/kwARbALtp8E/maxresdefault.jpg"
      alt="Second slide"
      width = "1000px"
      height = "500px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ytimg.com/vi/eR1ZoHrK17U/maxresdefault.jpg"
      alt="Third slide"
      width = "1000px"
      height = "500px"
    />
  </Carousel.Item>
</Carousel>
    )
}

export default slider
