import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Overlay from './components/card/Overlay'
import Footer from './components/footersection/Footer'
import Navbar from './components/navbarsection/Navbar'
import Popup from './components/Popup/Popup'
import Home from './pages/Home'
import PlaceToStay from './pages/PlaceToStay'


function App() {
  const [pop, setPop] = useState(false)
  const handleClickPop = () => {
    pop ? setPop(false) : setPop(true) 
  }
  return (
    <div className={`App overflow-hidden`}>
      <BrowserRouter>
        <Navbar handleClickPop={handleClickPop}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/placetostay' element={<PlaceToStay/>}/>
        </Routes>
        <Footer/>
        { pop && 
          <>
          <Popup handleClickPop={handleClickPop}/>
          <Overlay handleClickPop={handleClickPop} pop={pop}/>
          </>
        }
      </BrowserRouter>
    </div>
  )
}

export default App
