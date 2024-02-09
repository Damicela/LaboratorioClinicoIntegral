import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Layout.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PauseOnHover from './components/Scroll.jsx'
import Nosotros from './components/Nosotros.jsx'
import Contacto from './components/Contacto.jsx'
import Servicios from './components/Servicios.jsx'
import BuscarServicio from './components/BuscarServicio.jsx'
import PrivacyPolicy from './components/Privacy-policy.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <PauseOnHover/>
      },
      {
        path: '/nosotros',
        element: <Nosotros/>
      },
      {
        path: '/Contacto',
        element: <Contacto/>
      },
      {
        path: '/servicios',
        element: <Servicios/>
      },
      {
        path: '/buscarservicio',
        element: <BuscarServicio/>
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy/>
      }
  
]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
