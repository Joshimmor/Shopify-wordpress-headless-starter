import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../styles/HeroSection.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class SlickSlider extends Component {
  //map images to slides
  constructor(props){
    super(props);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToScroll: 1,
      pauseOnHover: true
    };
    return (
      <div className={styles.HeroBanner}>
        <Slider {...settings}>
         {this.props.Slider_Data.map((n, index)=>(
          <div key={index}>{n}</div>
         ))}
        </Slider>
      </div>
    );
  }
}