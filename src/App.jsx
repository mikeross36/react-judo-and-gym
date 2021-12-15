import React from "react"
import {useState} from "react"
import Header from "./components/header/Header"
import Banner from "./components/banner/Banner";
import Offers from "./components/offers/Offers";
import Seniors from "./components/seniors/Seniors";
import About from "./components/about/About";
import Team from "./components/team/Team";
import Slider from "./components/slider/Slider";
import Shop from "./components/gymshop/shop/Shop";
import Contact from "./components/contact/Contact";

export default function App(){
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = function(){
    setCurrentSlide(currentSlide -1)
  };

  const nextSlide = function(){
    setCurrentSlide(currentSlide +1)
  }

  const toggleMobileMenu = function(){
    setShowMobileMenu(!showMobileMenu)
  };

  const closeMobileMenu = function(){
    setShowMobileMenu(false)
  };

  return (
    <>
      <Header 
        toggleMobileMenu={toggleMobileMenu}
        showMobileMenu={showMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />
      <Banner />
      <Offers />
      <Seniors />
      <About />
      <Team />
      <Slider 
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      <Shop />
      <Contact />
    </>
  )
}