import React from "react"
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Banner from "./Components/Banner";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";
import Banner2 from "./Components/Banner2";



function App() {
 

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <Hero />
     <Services />
     <Banner />
     <Subscribe />
     <Banner2 />
     <Footer />

    </main>
  )
}

export default App
