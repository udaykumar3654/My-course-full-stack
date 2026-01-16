import { Route, Routes } from "react-router"
import { Banner, About, Footer, HeroSection, Navbar, Contact, Service } from "./components"


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Banner/>
      <Contact/>
      <Service/>
      <Footer/>
      {/* <Routes>
        <Route path="/services" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/join" element={<Contact/>}/>
      </Routes> */}
    </div>
  )
}

export default App
