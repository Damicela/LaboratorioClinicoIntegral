import {Outlet, Link } from 'react-router-dom'
import Logolab from '../img/logo-lab.jpg'
import Footer from '../components/Footer'

const Header = () => {
    return (
        <>
        <header className="flex  bg-sky-700 justify-between">
            <Link to={'/'}>
                <img src={Logolab} alt="logo-laboratorio" className='size-32 ml-20 rounded-md'/>
            </Link>
            <div className='flex self-center'>
                 <h1 className='text-4xl text-slate-100'>
                     Laboratorio Clinico Integral
                  </h1>
            </div>
           
            <nav className='md:flex gap-4 items-end mb-5 mr-10 text-slate-50 text-xl'>
                <Link to={'/contacto'} className="hover:text-slate-300 cursor-pointer">Contacto</Link>
                <Link to={'/nosotros'} className="hover:text-slate-300 cursor-pointer">Nosotros</Link>
                <Link to={'/servicios'} className="hover:text-slate-300 cursor-pointer">Servicios</Link>
                <Link to={'/buscarservicio'} className="hover:text-slate-300 cursor-pointer">Buscar Servicio</Link>
            </nav>
            
           
        </header>
        <main className='flex justify-center md: w-full bg-sky-500 overflow-scroll'>
                <Outlet/>
        </main>
        </>
        
        
       
    )
}

function App() {

    return (
      <div className='mx-auto'>
        <Header/>
        <Footer/>
      </div>
    )
  }
  
  export default App