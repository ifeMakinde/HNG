// import { useState } from "react";
import "./App.css";
import Gain from "./components/Gain";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoIs from "./components/WhoIs";
import Career from "./components/Career";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <WhoIs />
      <Gain />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
