import React from "react";
import {render} from "@testing-library/react"
import Contact from "./Contact"

describe("contact component testing", function(){
    test("should render contact details", function(){
        const {getAllByTestId} = render(<Contact />)
        const details = getAllByTestId("contact-details")
        expect(details).toHaveLength(2)
    })

    test("should render submit form", function(){
        const {getByTestId} = render(<Contact />)
        const submitForm = getByTestId("submit-form")
        expect(submitForm).toHaveClass("submit-form")
    })

    test("should render copyright", function(){
        const {getByRole} = render(<Contact />)
        const copyright = getByRole("link")
        expect(copyright).toHaveTextContent(/Copyright 2020 DodaDesign all rights reserved/i)
    })
})