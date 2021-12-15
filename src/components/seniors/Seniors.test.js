import React from "react"
import {render, screen} from "@testing-library/react"
import Seniors from "./Seniors"

describe("testing component", function(){
    test("should render title", function(){
        render(<Seniors />)
        expect(screen.getByRole("heading")).toHaveTextContent("Programi treninga za seniore")
    })
    test("should render videos", function(){
        render(<Seniors />)
        expect(screen.getAllByTestId("video")).toHaveLength(2)
    })
})