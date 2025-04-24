import Navbar from "./compents/Navbar"
import Home from "./pages/Home"
import AboutUs from "./pages/About"
import Contact from "./pages/Contact"
import Faq from "./pages/Faq"



import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  

  return (
    <>
    <Navbar />
    <Routes>
          <Route path="/" element={<Home/>} />
        
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Faq" element={<Faq/>} />
    </Routes>
      
    </>
  )
}

export default App