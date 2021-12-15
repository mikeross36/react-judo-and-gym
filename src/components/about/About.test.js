import React from "react"
import {render} from "@testing-library/react"
import About from "./About"
import {BrowserRouter} from "react-router-dom"

const MockAbout = function(){
    return (
        <BrowserRouter>
            <About />
        </BrowserRouter>
    )
}

describe("about component testing", function(){
    test("should render about info", function(){
        const {getByRole} = render(<MockAbout />)
        const title = getByRole("heading")
        expect(title).toHaveTextContent('Judo & Gym club "Dzuns"')
    })

    test("should render main button", function(){
        const {getByRole} = render(<MockAbout />)
        const mainBtn = getByRole("button")
        expect(mainBtn).toBeTruthy()
    })
})