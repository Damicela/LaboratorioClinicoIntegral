import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'



function App() {
    return (
      <div className='bg-gray-100 flex flex-col justify-between w-full'>
        <Header/>
        <main className='flex justify-center  '>
           <Outlet/>
        </main>
        <Footer/>
      </div>
    )
  }
  
  export default App