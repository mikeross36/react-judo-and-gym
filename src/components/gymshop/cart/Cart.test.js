import React from "react"
import {render, screen} from "@testing-library/react"
import Cart from "./cart"
import AppProvider from "../../../StateManager/AppProvider"
import { act } from "react-dom/test-utils"

const mockedCartItems = jest.fn()
const mockedShowCart = jest.fn()

const CartRender = function(){
    return render(
        <AppProvider>
            <Cart  
                showCart={mockedShowCart} 
                cartItems={mockedCartItems} 
            />
        </AppProvider>
    )
}

describe("testing cart component", function(){
    test("should render cart with close button & title", function(){
        act(function(){
            CartRender()
            expect(screen.getByTestId("cart")).toBeTruthy()
            expect(screen.getByRole("button")).toHaveTextContent(/zatvori/i)
            expect(screen.getByText(/tvoja korpa/i)).toBeTruthy()
        })
    })

    test("should render empty cart", function(){
        act(function(){
            CartRender()
            expect(screen.getByTestId("empty-cart")).toHaveClass("empty-cart")
        })
    })

    test("should render footer", function(){
        act(function(){
            CartRender()
            expect(screen.getByRole("contentinfo")).toHaveClass("cart-footer")
        })
    })
})