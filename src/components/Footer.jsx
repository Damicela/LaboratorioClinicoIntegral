import { Link } from "react-router-dom";
import Logolab from "../img/logo-lab.jpg";
import { SiFacebook } from "react-icons/si";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-branding">
      <div className="flex flex-col md:flex-row justify-between py-10 px-4 lg:px-10   text-white bg-branding">
        <div>
          <img src={Logolab} className="mb-4 md:mb-0 h-20 lg:h-28" alt="logo" />
        </div>

        <span className="mb-4 md:mb-0 md:text-center text-base ">
          Calle Saturno, Esq. Paseo de la Boquita <br /> Col. Industrial
          Zihutanejo, Gro. <br /> CP.40880
        </span>
        <div className="flex flex-col text-left">
          <span className="leading-loose  text-base ">Contacto:</span>
          <div className="flex">
            <div className="mt-2 mr-3">
              <BsTelephone />
            </div>
            <span className="flex justify-between text-base">
              (+52)755-554-0143
            </span>
          </div>

          <div className="flex">
            <div className="mt-3 mr-3">
              <TfiEmail />
            </div>
            <span className="flex justify-between leading-loose text-base">
              laboratoriointegral@live.com.mx
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="leading-loose text-base mb-2  lg:mr-10 ">
            Encuentranos en:
          </span>
          <div className="flex gap-4">
            <Link
              className="flex gap-4"
              to={"https://www.facebook.com/laboratoriointegrallive.com.mx/"}
              target="_blank"
            >
              <SiFacebook />
            </Link>
            <Link to={"https://wa.me/5217551021726"} target="_blank">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
      <div className="md:flex px-2 mx-4 md:px-32 justify-between font-medium gap-28 py-5 text-white border-t-2">
        <p className="">© 2023 Laboratorio Clínico Integral todos los derechos reservados</p>
        <p className="hover:text-blue-400 cursor-pointer">Términos y condiciones</p>
        <Link to={"/privacy-policy"}>
        <p className="hover:text-blue-400 cursor-pointer">Política de privacidad</p>
        </Link>
        
      </div>
      

    </div>
  );
};

export default Footer;
