import { Link } from "react-router-dom";
import Logolab from "../img/logo-lab.jpg";
import { SiFacebook } from "react-icons/si";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between py-10 px-6 md:px-20 text-white bg-branding">
      <div>
        <img src={Logolab} className="mb-4 md:mb-0 h-20" alt="logo" />
      </div>

      <span className="mb-4 md:mb-0 md:text-center text-xl ">
        Calle Saturno, Esq. Paseo de la Boquita <br /> Col. Industrial
        Zihutanejo, Gro. <br /> CP.40880
      </span>
      <div className="flex flex-col text-left">
        <span className="leading-loose  text-xl ">Contacto:</span>
        <div className="flex">
          <div className="mt-2 mr-3">
            <BsTelephone />
          </div>
          <span className="flex justify-between text-xl">
            (+52)755-554-0143
          </span>
        </div>

        <div className="flex">
          <div className="mt-3 mr-3">
            <TfiEmail />
          </div>
          <span className="flex justify-between leading-loose text-xl">
            laboratoriointegral@live.com.mx
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="leading-loose text-xl mb-2">Encuentranos en:</span>
        <div className="flex gap-4">
          <Link
          className="flex gap-4"
          to={"https://www.facebook.com/laboratoriointegrallive.com.mx/"}
        >
          <SiFacebook />
        </Link>
        <Link to={""}>
          <FaWhatsapp />
        </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
