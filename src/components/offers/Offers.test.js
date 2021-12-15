import {render, screen} from "@testing-library/react"
import Offers from "./Offers"

describe("testing offers component", function(){
    test("should render components title", function(){
        render(<Offers />)
        expect(screen.getByRole("heading")).toHaveTextContent("Naše usluge")
    })

    test("should render 6 offer articles", function(){
        render(<Offers />)
        expect(screen.getAllByRole("article")).toHaveLength(6)
        expect(screen.getAllByAltText("offer")).toHaveLength(6)
    })
})