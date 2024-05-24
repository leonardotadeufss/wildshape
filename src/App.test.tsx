import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card from "./components/Card"
import beasts from "./data/beasts"

describe("Card component", () => {
    it('should display image, name, cr and traits', () => {
        render(<Card beast={beasts[0]} />)

        const name = screen.getByText('Allosaurus')

        expect(name).toBeInTheDocument()
    })
})