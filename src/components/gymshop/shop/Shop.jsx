import React, {useContext, useState} from "react"
import Product from "../products/Product"
import Context from "../../../StateManager/Context"
import ShopNav from "../shopnav/ShopNav"
import Cart from "../cart/Cart"

export default function Shop(){
    const context = useContext(Context)
    const [showCart, setShowCart] = useState(false)

    const openCart = function(){
        setShowCart(true)
    };

    const closeCart = function(){
        setShowCart(false)
    };

    return (
        <section className="shop" id="shop">
            <ShopNav 
                openCart={openCart}
                cartItemsTotal={context.cartItemsTotal}
            />
            <Cart 
                showCart={showCart}
                cartItems={context.cartItems}
                closeCart={closeCart}
                removeFromCart={context.removeFromCart}
                increase={context.increaseQuant}
                decrease={context.decreaseQuant}
                cartMoneyTotal={context.cartMoneyTotal}
                clearCart={context.clearCart}
            />
            <div className="shop-container">
                <section className="product-list">
                    {context.products.map(function(product){
                        const {id, title, image, price, quantity} = product;
                        return (
                            <Product 
                                key={id}
                                id={id}
                                title={title}
                                image={image}
                                price={price}
                                quantity={quantity}
                                openCart={openCart}
                                addToCart={context.addToCart}
                            />
                        )
                    })}
                </section>
            </div>
        </section>
    )
}