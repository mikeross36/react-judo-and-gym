import React from "react"
import {FaCartPlus} from "react-icons/fa"

export default function ShopNav({openCart, cartItemsTotal}){
    return (
        <nav className="shop-nav" id="shop-nav">
            <h2>Judo & Gym Shop</h2>
            <div 
                className="cart-icon-wrapper"
                onClick={openCart}>
                <FaCartPlus className="cart-icon"/>
                <span className="cart-count">{cartItemsTotal}</span>
            </div>
        </nav>
    )
}