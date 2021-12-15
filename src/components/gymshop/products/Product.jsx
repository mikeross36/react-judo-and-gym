import React, {useState} from "react"
import { HashLink } from "react-router-hash-link"
import {useState} from "react"
import {FaCartPlus} from "react-icons/fa"
import { cardVariants } from "./productVariants"
import {motion} from "framer-motion"

export default function Product({openCart, addToCart, ...props}){
    const [isHover, setIsHover] = useState(false)
    const [isCardRotate, setIsCardRotate] = useState(false)

    const handleMouseOver = function(){
        setIsHover(true)
    };

    const handleMouseLeave = function(){
        setIsHover(false)
    };

    return (
        <div className="product-wrapper"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}>
                {isHover && (
                    <div className="card-overlay" data-testid="overlay">
                        <div
                            onClick={function(){
                                addToCart({...props})
                                setIsCardRotate(true)
                            }} 
                            className="add-to-cart">
                            <FaCartPlus className="add-icon"/>
                            <p className="add-title">dodaj u korpu</p>
                        </div>
                    </div>
                )}
                {isCardRotate ? (
                    <motion.article className="product-card"
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <img src={props.image} alt="product pic" />
                        <div className="card-info">
                            <span className="product-title">{props.title}</span>
                            <span className="product-price">{props.price} €</span>
                        </div>
                    </motion.article>
                ) : (
                    <article className="product-card">
                        <img src={props.image} alt="product pic" />
                        <div className="card-info">
                            <span className="product-title" data-testid="title">{props.title}</span>
                            <span className="product-price">{props.price} €</span>
                        </div>
                    </article>
                )}
            <HashLink
                smooth to="#shop">
                <button 
                    onClick={openCart}
                    className="go-to-cart">
                    korpa
                </button>
            </HashLink>
        </div>
    )
}