import { Link } from "react-router-dom";
import Logolab from "../img/logo-lab.jpg";
import { SiFacebook } from "react-icons/si";
import { BsTelephone } from "react-icons/bs"
import { TfiEmail } from "react-icons/tfi"

const Footer = () => {
  return (
    <div className="footer flex justify-between py-10 px-20 text-white">
      <img src={Logolab} className="h-20" alt="logo" />
      <span className="text-center text-xl ">
        Calle Saturno, Esq. Paseo de la Boquita <br /> Col. Industrial
        Zihutanejo, Gro. <br /> CP.40880
      </span>
      <div className="flex flex-col text-left">
        <span className="leading-loose  text-xl ">Contacto:</span>
        <div className="flex">
            <div className="mt-2 mr-3">
            <BsTelephone/>
            </div>
          <span className="flex justify-between text-xl">(+52)755-554-0143</span>
        </div>

        <div className="flex">
            <div className="mt-3 mr-3">
                <TfiEmail/>
            </div>
            <span className="flex justify-between leading-loose text-xl">
            laboratoriointegral@live.com.mx
        </span>
        </div>

        
      </div>
      <div className="flex flex-col">
        <span className="leading-loose text-xl mb-2">Encuentranos en:</span>
        <Link to={"https://www.facebook.com/laboratoriointegrallive.com.mx/"}>
          <SiFacebook />
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
