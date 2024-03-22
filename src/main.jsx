import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Layout.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import Servicios from './pages/Servicios.jsx'
import BuscarServicio from './pages/BuscarServicio.jsx'
import PrivacyPolicy from './components/Privacy-policy.jsx'
import BarCodeHttp from './pages/BarCodeHttp.jsx'
import { loader as getBarcodeLoader } from './pages/BarCodeHttp.jsx'
import { action } from './pages/Contacto.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <MainPage/>
      },
      {
        path: '/nosotros',
        element: <Nosotros/>
      },
      {
        path: '/Contacto',
        element: <Contacto/>,
        action: action
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
      },
      {
        path: '/services-admin/:barcode',
        element: <BarCodeHttp/>,
        loader: getBarcodeLoader
      }
  
]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
