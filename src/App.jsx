import React, { useState } from 'react'

import Navbar from "./global/Navbar";
import Hero from "./home/Hero";
import Minitng from "./home/Minting";
import Rarity from "./home/Rarity";
import Slider from "./home/Slider";
import RoadMap from "./home/RoadMap";
import Footer from "./global/Footer";

function App() {
  const [account, setAccount] = useState("");
  return (
    <div>
      <Navbar account={account} setAccount={setAccount} />
      <Hero />
      <Minitng />
      <Rarity />
      <Slider />
      <RoadMap />
      <Footer />
    </div>
  );
}

export default App;
