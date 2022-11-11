import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footersection/Footer'
import Navbar from './components/navbarsection/Navbar'
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
