import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card from "../components/Card"
import beasts from "../data/beasts"

describe("Card component", () => {
    var beast = beasts[1]
    it('should display image, name, cr, size and traits', () => {
        render(<Card beast={beast} />)

        const img = screen.getByAltText(beast.name)
        expect(img).toHaveAttribute('src', beast.img)
    })

    it('should display name', () => {
        render(<Card beast={beast} />)

        const name = screen.getByText(beast.name)
        expect(name).toBeInTheDocument()
    })
    it('should display cr and size', () => {
        render(<Card beast={beast} />)

        const crAndSize = screen.getByText(new RegExp(`${beast.size} - CR ${beast.cr}`, "i"))
        expect(crAndSize).toBeInTheDocument()
    })
    it('should display traits', () => {
        render(<Card beast={beast} />)


        if (beast.traits) {
            beast.traits.forEach(trait => {
                var traitName = screen.getByText(trait.name)
                expect(traitName).toBeInTheDocument()
            })
        }

    })
})
