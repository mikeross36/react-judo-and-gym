import React from "react"
import {slides} from "./data"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider(){
    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(function(){
        if(currentSlide > slides.length -1){
            setCurrentSlide(0)
        }
        else if(currentSlide < 0){
            setCurrentSlide(slides.length -1)
        }
    },[currentSlide])

    const prevSlide = function(){
        setCurrentSlide(currentSlide -1)
    };

    const nextSlide = function(){
        setCurrentSlide(currentSlide + 1)
    };

    return (
        <section className="slider">
            <h2>naši članovi</h2>
            <div className="slider-wrapper">
                {slides.map(function(slide, index){
                    const {id, img, name, title, text} = slide;

                    let position = "next-slide";
                    if(index === currentSlide){
                        position = "active-slide"
                    }
                    else if(index === currentSlide -1 || (currentSlide === 0 && index === slides.length -1)){
                        position = "prev-slide"
                    }

                    return (
                        <article 
                            key={id}
                            className={`slide ${position}`}>
                            <img src={img} alt={name} />
                            <h3>{name}</h3>
                            <p className="title">{title}</p>
                            <p className="text">{text}</p>
                        </article>
                    )
                })}
            </div>
            <button 
                onClick={prevSlide}
                className="prev-btn">
                <FaChevronLeft />
            </button>
            <button 
                onClick={nextSlide}
                className="next-btn">
                <FaChevronRight />
            </button>
        </section>
    )
}