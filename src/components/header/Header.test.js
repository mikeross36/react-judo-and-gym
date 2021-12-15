import React from "react"
import {render, screen, fireEvent} from "@testing-library/react"
import Header from "./Header"
import {BrowserRouter} from "react-router-dom"

const mockedToggleMobileMenu = jest.fn()

const MockedHeader = function({toggleMobileMenu}){
    return (
        <BrowserRouter>
            <Header toggleMobileMenu={mockedToggleMobileMenu}/>
        </BrowserRouter>
    )
};

describe("testing header component" , function(){
    test("should render header logo", function(){
        render(<MockedHeader />)
        expect(screen.getByAltText("logo")).toBeTruthy()
    })

    test("should render menu button toggle", function(){
        render(
            <MockedHeader toggleMobileMenu={mockedToggleMobileMenu}/>
        )
        const menubtn = screen.getByRole("button")
        fireEvent.click(menubtn)
        expect(mockedToggleMobileMenu).toBeCalled()
    })

    test("should render header links", function(){
        render(<MockedHeader />)
        expect(screen.getByTestId("desktop-links")).toHaveClass("desktop-links")
        expect(screen.getByTestId("social-icons")).toHaveClass("nav-social-icons")
        expect(screen.getByTestId("mobile-links")).toHaveClass("mobile-links")
        expect(screen.getAllByRole("link")).toHaveLength(13)
    })
})