import React, {useState} from "react"
import { HashLink } from "react-router-hash-link"
import { FaCartPlus } from "react-icons/fa";

export default function Product({openCart, addToCart, ...props}){
    const [isHover, setIsHover] = useState(false)

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
                    <div className="card-overlay">
                        <div className="add-to-cart"
                            onClick={function(){
                                addToCart({...props})
                            }}>
                            <FaCartPlus className="add-icon"/>
                        <p className="add-title">dodaj u korpu</p>
                        </div>
                    </div>
                )}
            <article className="product-card">
                <img src={props.image} alt={props.title} />
                <div className="card-body">
                    <span className="product-title">{props.title}</span>
                    <span className="product-price">{props.price} €</span>
                </div>
            </article>
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