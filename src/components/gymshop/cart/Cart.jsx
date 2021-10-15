import React from "react"
import {useSpring, animated} from "react-spring"
import {FaTrash, FaChevronUp,FaChevronDown} from "react-icons/fa"

export default function Cart({
    showCart,
    cartItems,
    closeCart,
    removeFromCart,
    increase,
    decrease,
    cartMoneyTotal,
    clearCart}){

    const animation = useSpring({
        config: {duration: 400},
        opacity: showCart ? 1 : 0,
        transform: showCart ? "translateY(0%)" : "translateY(-100%)",
    })

    return (
        <>
            {showCart && (
                <div className="cart-layout">
                    <animated.div style={animation}>
                        <div className="cart-wrapper">
                            <button 
                                className="close-cart"
                                onClick={closeCart}>zatvori</button>
                            <dd className="cart-header">tvoja korpa</dd>
                            {cartItems.length === 0 ? (
                                <div className="empty-cart">korpa je prazna</div>
                            ) : (
                                cartItems.map(function(product){
                                    const {id, image, title, price, quantity} = product;
                                    return (
                                        <article key={id} className="cart-item">
                                            <img src={image} alt={title} />
                                            <div className="cart-column">
                                                <span className="title">{title}</span>
                                                <span className="price">{price}</span>
                                                <span 
                                                    className="remove-item"
                                                    onClick={function(){
                                                        removeFromCart(id)
                                                    }}>
                                                    <FaTrash />
                                                </span>
                                            </div>
                                            <div className="cart-column">
                                                <button 
                                                    className="quant-btn"
                                                    onClick={function(){
                                                        increase(id)
                                                    }}>
                                                    <FaChevronUp className="increase" />
                                                </button>
                                                <span className="quantity">{quantity}</span>
                                                <button 
                                                    className="quant-btn"
                                                    onClick={function(){
                                                        decrease(id)
                                                    }}>
                                                    <FaChevronDown className="decrease" />
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
                                    <button 
                                        className="clear-cart"
                                        onClick={clearCart}>
                                        isprazni korpu
                                    </button>
                                )}
                            </footer>
                        </div>
                    </animated.div>
                </div>
            )}
        </>
    )
}