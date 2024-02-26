import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'



function App() {
    return (
      <div className='bg-gray-100 flex flex-col justify-between w-full h-screen'>
        <Header/>
        <main className='flex justify-center bg-gray-100'>
           <Outlet/>
        </main>
        <Footer/>
      </div>
    )
  }
  
  export default App