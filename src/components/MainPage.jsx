import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 const MainPage = () =>  {

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: false,
  };
    return (
      <div className="w-full">
        <Slider {...settings}>
          <div className="s3">
            <div className="md:flex md:justify-between px-6 md:px-60 ">
              <div className="md:w-3/6 flex flex-col py-16 justify-evenly text-center">
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
                <Link to={"/contacto"}>
                  <button className="bg-indigo-600 rounded-lg text-white text-lg font-bold w-32 h-10 self-center my-10">
                    Contáctanos
                  </button>
                </Link>
              </div>
              <div className="ml-14 md:mt-52 md:ml-40 w-60 h-60">
                <img
                  className="w-full shadow-2xl shadow-black"
                  src="assets/machine.jpg"
                  alt="machine"
                />
              </div>
            </div>
          </div>

          <div className="s4">
            <div className="md:flex md:justify-between px-6 md:px-60 ">
              <div className="md:w-3/6 flex flex-col py-16 justify-evenly text-center">
                <p className="bg-blue-900 text-xl text-gray-100">
                  Sistema de registro y contro de muestra
                </p>
                <h1 className="text-6xl mt-20 text-slate-100 font-bold resultados">
                  Registro y control de resultados
                </h1>
                <p className="text-xl font-medium mt-20">
                  Contamos con software espacializado para el registro, control
                  de muestras, asi como envio de resultados via email, agendar
                  citas, historico de servicios entre otros...
                </p>
                <Link to={"/contacto"}>
                  <button className="bg-indigo-600 rounded-lg text-white text-lg font-bold w-40 h-10 self-center my-10">
                    Agenda una cita
                  </button>
                </Link>
              </div>
              <div className="ml-14 md:mt-44 md:ml-40 w-60 h-60">
                <img
                  className="w-full shadow-2xl shadow-black"
                  src="assets/software.jpg"
                  alt="machine"
                />
              </div>
            </div>
          </div>
          <div className="s5">
            <div className="md:flex md:justify-between px-6 md:px-60 ">
              <div className="md:w-3/6 flex flex-col py-16 justify-evenly text-center">
                <p className="bg-blue-900 text-xl text-gray-100">
                  Personal altamente calificado
                </p>
                <h1 className="text-6xl mt-20 text-slate-100 font-bold resultados">
                  Certificados y actualizados
                </h1>
                <p className="text-xl font-medium mt-20">
                  Todo nustro personal tecnico esta titulado y cuanta con las
                  certificaciones para manejar los mas altos estandares en
                  analisis quimicos clinicos
                </p>
                <Link to={"/servicios"}>
                  <button className="bg-indigo-600 rounded-lg text-white text-lg font-bold w-32 h-10 self-center my-10">
                    Servicios
                  </button>
                </Link>
              </div>
              <div className="ml-14 md:mt-52 md:ml-40 w-60 h-60">
                <img
                  className="w-full shadow-2xl shadow-black"
                  src="assets/toma.jpg"
                  alt="machine"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }


  export default MainPage