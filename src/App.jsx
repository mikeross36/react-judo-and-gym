import React from "react"
import Header from "./components/header/Header"
import Banner from "./components/banner/Banner"
import Offers from "./components/offers/Offers"
import Seniors from "./components/seniors/Seniors"
import About from "./components/about/About"
import Team from "./components/team/Team"
import Slider from "./components/slider/Slider"
import Shop from "./components/gymshop/shop/Shop"
import Contact from "./components/contact/Contact"

export default function App(){
    return(
        <>
            <Header />
            <Banner />
            <Offers />
            <Seniors />
            <About />
            <Team />
            <Slider />
            <Shop />
            <Contact />
        </>
    )
}