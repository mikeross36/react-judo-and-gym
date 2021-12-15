import React from "react-router-dom"
import {render, screen} from "@testing-library/react"
import Product from "./Product"
import { BrowserRouter } from "react-router-dom"

const MockedProduct = function(){
    return (
        <BrowserRouter>
            <Product isHover={true}/>
        </BrowserRouter>
    )
};

describe("testing product component", function(){
    test("should render product card", function(){
        render(<MockedProduct />)
        expect(screen.getByRole("article")).toHaveClass("product-card")
    })

    test("should render product image", function(){
        render(<MockedProduct />)
        expect(screen.getByAltText("product pic")).toBeTruthy()
    })

    test("shoud render product title & price", function(){
        render(<MockedProduct />)
        expect(screen.getByText("€")).toHaveClass("product-price")
        expect(screen.getByTestId("title")).toBeTruthy()
    })

    test("should render cart btn", function(){
        render(<MockedProduct />)
        expect(screen.getByRole("button",{name: /korpa/i})).toHaveClass("go-to-cart")
    })
})