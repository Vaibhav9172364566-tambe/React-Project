
import './App.css'
import Navbar from './compounts/Navbar'
import Home from './compounts/Home'
import About from './compounts/About'
import Experience from './compounts/Experience'
import Footer from './compounts/Footer'
import Contact from './compounts/Contact'
// import Portfolio from './compounts/Portfolio'

function App() {

  return (
    <>
     
     
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      {/* <Portfolio></Portfolio> */}
      <Experience></Experience>
      <Contact></Contact>

      <Footer></Footer>

       
    </>
  )
}

export default App
