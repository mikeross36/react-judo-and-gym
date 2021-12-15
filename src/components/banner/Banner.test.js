import React from "react"
import {render} from "@testing-library/react"
import Banner from "./Banner"

describe("banner component testing", function(){
    test("should render banner headings", function(){
        const {getByText} = render(<Banner />)
        const heading1 = getByText("Judo & Gym club Dzuns")
        expect(heading1).toBeTruthy()
        const heading2 = getByText("JudoNS 2008 Teretana/Fitness centar")
        expect(heading2).toBeTruthy()
    })
})