import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Find from "./components/Find/Find";
import Driver from "./components/Driver/Driver";
import Luxury from "./components/Luxury/Luxury";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;



// 1. importujemo Navbar.jsx komponentu
// 2. importujemo Hero.jsx komponentu
// 3. importujemo Find.jsx komponentu
// 4. importujemo Driver.jsx komponentu
// 5. importujemo Luxury.jsx komponentu
// 6. importujemo Footer.jsx komponentu
