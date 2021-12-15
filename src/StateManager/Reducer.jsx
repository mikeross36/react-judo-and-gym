import {ADD_TO_CART,REMOVE_FROM_CART,INCREASE_QUANT,DECREASE_QUANT,GET_TOTALS,CLEAR_CART} from "./types"

function addToCart(state, product){
    const cartItemsCopy = [...state.cartItems];
    const currItemIdx = cartItemsCopy.findIndex(function(cartItem){
        return cartItem.id === product.id;
    })
    if(currItemIdx < 0){
        cartItemsCopy.push({...product})
    }
    else {
        const itemCopy = cartItemsCopy[currItemIdx];
        itemCopy.quantity++;
        cartItemsCopy[currItemIdx] = itemCopy;
    }
    return {...state, cartItems: cartItemsCopy}
};

function removeFromCart(state, id){
    let cartItemsCopy = [...state.cartItems];
    cartItemsCopy = cartItemsCopy.filter(function(cartItem){
        return cartItem.id !== id;
    });
    return {...state, cartItems: cartItemsCopy}
};

function increaseQuant(state, id){
    const incItemQuant = state.cartItems.map(function(cartItem){
        if(cartItem.id === id){
            return {...cartItem, quantity: cartItem.quantity +1}
        }
        return cartItem;
    })
    return {...state, cartItems: incItemQuant}
};

function decreaseQuant(state, id){
    const decItemQuant = state.cartItems.map(function(cartItem){
        if(cartItem.id === id){
            return {...cartItem, quantity: cartItem.quantity -1}
        }
        return cartItem;
    }).filter(function(cartItem){
        return cartItem.quantity !== 0;
    })
    return {...state, cartItems: decItemQuant}
};

function getTotals(state){
    let {cartItemsTotal, cartMoneyTotal} = state.cartItems.reduce(function(acc, cartItem){
        const {price, quantity} = cartItem;
        const itemMoneyTotal = price * quantity;
        
        acc.cartItemsTotal += quantity;
        acc.cartMoneyTotal += itemMoneyTotal;
        return acc;
    },{cartItemsTotal:0, cartMoneyTotal:0})

    cartMoneyTotal = parseFloat(cartMoneyTotal.toFixed(2));
    return {...state, cartItemsTotal, cartMoneyTotal}
};

function clearCart(state){
    return {...state, cartItems: []}
};

export default function Reducer(state, action){
    switch(action.type){
        case ADD_TO_CART:
            return addToCart(state, action.payload);
        case REMOVE_FROM_CART:
            return removeFromCart(state, action.payload);
        case INCREASE_QUANT: 
            return increaseQuant(state, action.payload);
        case DECREASE_QUANT:
            return decreaseQuant(state, action.payload);
        case GET_TOTALS:
            return getTotals(state);
        case CLEAR_CART:
            return clearCart(state);
        default:
            return state;
    }
}