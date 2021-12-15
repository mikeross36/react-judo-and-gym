import React from "react"
import {useRef, useCallback, useEffect} from "react"
import {FaTrash, FaChevronUp, FaChevronDown} from "react-icons/fa"
import {motion} from "framer-motion"
import {modalVariants} from "./cartVariants"
import useEmptyClick from "../../../hooks/useEmtyClick"

export default function Cart({
    showCart,
    cartItems,
    closeCart,
    removeFromCart,
    increase,
    decrease,
    cartMoneyTotal,
    emptyCart}){
    const cartRef = useRef(null)
    useEmptyClick(cartRef, function(){
        closeCart()
    });

    const keyPress = useCallback(function(e){
        if(e.key === "Escape" && showCart){
            closeCart()
        }
    },[showCart, closeCart])

    useEffect(function(){
        document.addEventListener("keydown", keyPress)
        return function(){
            document.removeEventListener("keydown", keyPress)
        }
    },[keyPress])

    return (
        <>
            {showCart && (
                <div className="cart-layout" ref={cartRef} data-testid="cart">
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="cart-wrapper">
                            <button 
                                onClick={closeCart}
                                className="close-cart">
                                zatvori
                            </button>
                            <dd className="cart-header">tvoja korpa</dd>
                            {cartItems.length === 0 ? (
                                <div className="empty-cart" data-testid="empty-cart">korpa je prazna</div>
                            ) : (
                                cartItems.map(function(product){
                                    const {id, image, title, price, quantity} = product;
                                    return (
                                        <article key={id} className="cart-item">
                                            <img src={image} alt="cart item" />
                                            <div className="cart-column">
                                                <span className="title">{title}</span>
                                                <span className="price">{price}</span>
                                                <button 
                                                    onClick={function(){
                                                        removeFromCart(id)
                                                    }}
                                                    className="remove-item">
                                                    <FaTrash className="remove-btn"/>
                                                </button>
                                            </div>
                                            <div className="cart-column">
                                                <button 
                                                    onClick={function(){
                                                        increase(id)
                                                    }}
                                                    className="quant-btn">
                                                    <FaChevronUp className="increase"/>
                                                </button>
                                                <span className="quantity">{quantity}</span>
                                                <button 
                                                    onClick={function(){
                                                        decrease(id)
                                                    }}
                                                    className="quant-btn">
                                                    <FaChevronDown className="decrease"/>
                                                </button>
                                            </div>
                                        </article>
                                    )
                                })
                            )}
                            <footer className="cart-footer">
                                <div className="cart-money-total">
                                    Ukupno: <span>{cartMoneyTotal} €</span>
                                </div>
                                {cartItems.length !== 0 && (
                                    <button className="clear-cart"
                                        onClick={emptyCart}>
                                        isprazni korpu
                                    </button>
                                )}
                            </footer>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    )
}