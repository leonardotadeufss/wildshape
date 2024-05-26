import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './app/page'
import beasts from './data/beasts'

describe("App component", () => {
    it('should display all beast cards', () => {
        render(<App />)

        beasts.forEach(beast => {
            var beastName = screen.getByText(beast.name)
            expect(beastName).toBeInTheDocument()
        })

    })
})
