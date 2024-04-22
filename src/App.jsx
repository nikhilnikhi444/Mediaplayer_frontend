
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './Pages/Landingpage'
import Home from './Pages/Home'
import Watchhistory from './Pages/Watchhistory'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
     <Header/>
      <Routes>
         {/*  slash is used to represents the base url */}
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watchhistory' element={<Watchhistory/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
