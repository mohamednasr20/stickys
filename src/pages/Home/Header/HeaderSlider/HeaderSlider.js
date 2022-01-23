import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FingersSlider from '../../../../assets/Fingers_slider.png';
import PoppersSlider from '../../../../assets/Poppers_slider.png';
import SandwichSlider from '../../../../assets/Sandwich_slider.png';
import ThighsSlider from '../../../../assets/Thighs_slider.png';
import './headerSlider.css';

const HeaderSlider = () => {
  return (
    <Carousel fade controls={false} className="Header-slider">
      <Carousel.Item>
        <img className="d-block w-70" src={PoppersSlider} alt="First slide" />
        <Carousel.Caption>
          <p>1 of 4</p>
          <h4>BITE POPPERS</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-70" src={FingersSlider} alt="Second slide" />
        <Carousel.Caption>
          <p>2 of 4</p>
          <h4>CRUNCHY FINGERS</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-70" src={SandwichSlider} alt="Third slide" />
        <Carousel.Caption>
          <p>3 of 4</p>
          <h4>CLASSIC SANDWICH</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-70" src={ThighsSlider} alt="Fouth slide" />
        <Carousel.Caption>
          <p>4 of 4</p>
          <h4>CRUNCHY THIGHS</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderSlider;
