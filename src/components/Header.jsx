import { Link } from "react-router-dom"
import Logolab from "../img/logo-lab.jpg"
import SidebarMenu from "./SidebarMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-2 px-4 lg:px-6 bg-branding">
      <Link to={"/"}>
        <img
          src={Logolab}
          alt="logo-laboratorio"
          className="h-16 md:h-20 md:ml-2  rounded-md"
        />
      </Link>
      <h1 className="md:mr-0 text-lg md:text-2xl lg:text-4xl text-slate-100">
        Laboratorio Clínico Integral
      </h1>
      <SidebarMenu/>

      <nav className="hidden md:flex gap-4 mr-0 lg:mr-10 text-slate-50 lg:text-2xl self-end">
        <Link to={"/contacto"} className="hover:text-slate-300 cursor-pointer">
          Contacto
        </Link>
        <Link to={"/nosotros"} className="hover:text-slate-300 cursor-pointer">
          Nosotros
        </Link>
        <Link to={"/servicios"} className="hover:text-slate-300 cursor-pointer">
          Servicios
        </Link>
        <Link
          to={"/buscarservicio"}
          className="hover:text-slate-300 cursor-pointer"
        >
          Buscar Servicio
        </Link>
      </nav>
    </header>
  );
};

export default Header;
