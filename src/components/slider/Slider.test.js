import {render, screen} from "@testing-library/react"
import Slider from "./Slider"

describe("testing slider component", function(){
    test("should render section title", function(){
        render(<Slider />)
        expect(screen.getByText("naši članovi")).toBeTruthy()
    })

    test("should render 5 slides with images", function(){
        render(<Slider />)
        expect(screen.getAllByRole("article")).toHaveLength(4)
        expect(screen.getAllByAltText("slide pic")).toHaveLength(4)
    })

    test("shoudl render 2 slider buttons", function(){
        render(<Slider />)
        expect(screen.getAllByRole("button")).toHaveLength(2)
    })
})