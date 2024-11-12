
import './App.css'
import Navbar from './compounts/Navbar'
import Home from './compounts/Home'
import About from './compounts/About'
import Experience from './compounts/Experience'
import Footer from './compounts/Footer'
import Contact from './compounts/Contact'
import { Toaster } from 'react-hot-toast'
// import Portfolio from './compounts/Portfolio'

function App() {

  return (
    <>
     
     
      <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      {/* <Portfolio></Portfolio> */}
      <Experience></Experience>
      <Contact></Contact>

      <Footer></Footer>
      </div>
      <Toaster></Toaster>


       
    </>
  )
}

export default App
