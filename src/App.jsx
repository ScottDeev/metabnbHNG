import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Overlay from './components/card/Overlay'
import Footer from './components/footersection/Footer'
import Navbar from './components/navbarsection/Navbar'
import Popup from './components/Popup/Popup'
import Home from './pages/Home'


function App() {
  const [pop, setPop] = useState(false)
  const handleClickPop = () => {
    pop ? setPop(false) : setPop(true) 
  }
  return (
    <div className={`App overflow-hidden`}>
      <BrowserRouter>
        <Navbar handleClickPop={handleClickPop}/>
        <Home/>
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
