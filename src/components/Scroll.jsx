
import { Link } from 'react-router-dom'
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class PauseOnHover extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      adaptiveHeight: true,
      arrows: false,
    };
    return (
      <div className="w-full">
        <Slider {...settings}>
          <div className="s3 py-10">
            <div className="md:flex justify-between px-60 ">
              <div className="md:w-3/6 flex flex-col justify-evenly text-center">
                <p className="bg-blue-900 text-xl text-gray-100">
                  Equipos de análisis clínicos de última generación
                </p>
                <h1 className="text-6xl mt-20 text-slate-100 font-bold resultados">
                  Resultados 100% Precisos
                </h1>
                <p className="text-xl font-medium mt-20">
                  Nuestro laboratorio cuenta con equipamiento de análisis
                  clínico de ultima generación, con una precisión y
                  confiabilidad avalada por test de calidad y calibración
                  continuos...
                </p>
                <Link to={'/contacto'}>
                <button className="bg-blue-900 text-white text-lg font-bold w-32 h-10 self-center">Contáctanos</button>
                </Link>
              </div>
              <div className="md:mt-44 md:ml-40 size-96">
            <img
              className="size-80 shadow-2xl shadow-black"
              src="assets/machine.jpg"
              alt="machine"
            />
          </div>
            </div>
            
          </div>
          

          <div className="s4 h-[300px]">holaaaaa</div>

          <div className="s5  h-4/5"></div>
        </Slider>
      </div>
    );
  }
}
