import React from "react"
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Banner from "./Components/Banner";



function App() {
 

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <Hero />
     <Services />
     <Banner />
    </main>
  )
}

export default App
