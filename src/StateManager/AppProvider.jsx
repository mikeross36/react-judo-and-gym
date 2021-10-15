import {ADD_TO_CART,REMOVE_FROM_CART,INCREASE_QUANT,DECREASE_QUANT,GET_TOTALS,CLEAR_CART} from "./types"
import React, {useReducer, useEffect} from "react"
import Context from "./Context"
import {products} from "../components/gymshop/products/data"
import Reducer from "./Reducer"

const initialState = {
    cartItems: [],
    cartItemsTotal: 0,
    cartMoneyTotal: 0
}

export default function AppProvider({children}){
    const [state, dispatch] = useReducer(Reducer, initialState)

    const addToCart = function(product){
        dispatch({type:ADD_TO_CART, payload: product})
    };

    const removeFromCart = function(id){
        dispatch({type:REMOVE_FROM_CART, payload: id})
    };

    const increaseQuant = function(id){
        dispatch({type:INCREASE_QUANT, payload: id})
    };

    const decreaseQuant = function(id){
        dispatch({type:DECREASE_QUANT, payload: id})
    };

    const clearCart = function(){
        dispatch({type:CLEAR_CART})
    };

    useEffect(function(){
        dispatch({type:GET_TOTALS})
    },[state.cartItems])

    return (
        <Context.Provider
            value={{
                products: products,
                ...state,
                addToCart,
                removeFromCart,
                increaseQuant,
                decreaseQuant,
                clearCart
            }}>
            {children}
        </Context.Provider>
    )
}
