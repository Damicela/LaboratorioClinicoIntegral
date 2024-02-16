import { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";

const SidebarMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav>
      <section className="flex md:hidden">
        <div onClick={() => setIsNavOpen(true)}>
          <div className={isNavOpen ? "hidden" : ""}>
            <IconContext.Provider value={{ color: "white" }}>
              <GiHamburgerMenu />
            </IconContext.Provider>
          </div>
        </div>

        <div
          className={
            isNavOpen
              ? "absolute z-10 flex flex-col items-center justify-between min-h-[250px] bg-white top-0 right-0 px-8 py-8"
              : "hidden"
          }
        >
          <div
            className="top-0 right-0 self-end"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="my-6">
              <Link
                to={"/contacto"}
                className="border-b border-gray-400 my-8 "
                onClick={() => setIsNavOpen(false)}
              >
                Contacto
              </Link>
            </li>
            <li className="my-6">
            <Link
                to={"/nosotros"}
                className="border-b border-gray-400 my-8"
                onClick={() => setIsNavOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li className="my-6">
            <Link
                to={"/servicios"}
                className="border-b border-gray-400 my-8"
                onClick={() => setIsNavOpen(false)}
              >
                Servicios
              </Link>
            </li>
            <li className="my-6">
            <Link
                to={"/buscarservicio"}

                className="border-b border-gray-400 my-8"
                onClick={() => setIsNavOpen(false)}
              >
                Buscar Servicio
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default SidebarMenu;
