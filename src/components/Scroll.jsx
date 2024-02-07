import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class PauseOnHover extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
      };
      return (
        <div className="w-full h-screen border-red-700 div1">
          <Slider {...settings}>
            <div className="s1">
           
            </div>

            <div className="s2">
          
            </div>

            <div className="s3">
         
            </div>

            <div className="s4">
            
            </div>

            <div className="s5">
          
            </div>
          </Slider>
        </div>
      );
    }
  }