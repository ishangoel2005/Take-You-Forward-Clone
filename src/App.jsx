import React from 'react';
import './App.css';
import './index.css';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import Services from './Components/Services/Services';
import Community from './Components/Community/Community';
import Testimonials from './Components/Testimonials/Testimonials';
import Instructor from './Components/Instructor/Instructor';
import FAQ from './Components/FAQ/FAQ';
import Links from './Components/Links/Links';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <Services/>
      <Community/>
      <Testimonials/>
      <Instructor/>
      <FAQ/>
      <Links/>
    </div>
  );
}

export default App;
