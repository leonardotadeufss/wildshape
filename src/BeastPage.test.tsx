import '@testing-library/jest-dom'
import { render, screen, queryByAttribute } from '@testing-library/react'
import { Action, Trait } from './types/types'
import Attributes from './components/Attributes'
import beasts from './data/beasts'
import TraitsAndActions from './components/TraitsAndActions'

describe("Attributes component", () => {
    it('should display all attributes and its bonuses', () => {

        const beast = beasts[0]

        const str = beast.str
        const dex = beast.dex
        const con = beast.con
        const int = beast.int
        const wis = beast.wis
        const cha = beast.cha

        render(<Attributes
            str={str}
            dex={dex}
            con={con}
            int={int}
            wis={wis}
            cha={cha}
        />)



        const strBonus = Math.floor((str - 10) / 2)
        const dexBonus = Math.floor((dex - 10) / 2)
        const conBonus = Math.floor((con - 10) / 2)
        const intBonus = Math.floor((int - 10) / 2)
        const wisBonus = Math.floor((wis - 10) / 2)
        const chaBonus = Math.floor((cha - 10) / 2)

        const strAtt = screen.getByText(`${str} (${strBonus > 0 ? '+' : ""}${strBonus})`)
        const dexAtt = screen.getByText(`${dex} (${dexBonus > 0 ? '+' : ""}${dexBonus})`)
        const conAtt = screen.getByText(`${con} (${conBonus > 0 ? '+' : ""}${conBonus})`)
        const intAtt = screen.getByText(`${int} (${intBonus > 0 ? '+' : ""}${intBonus})`)
        const wisAtt = screen.getByText(`${wis} (${wisBonus > 0 ? '+' : ""}${wisBonus})`)
        const chaAtt = screen.getByText(`${cha} (${chaBonus > 0 ? '+' : ""}${chaBonus})`)


        expect(strAtt).toBeInTheDocument()
        expect(dexAtt).toBeInTheDocument()
        expect(conAtt).toBeInTheDocument()
        expect(intAtt).toBeInTheDocument()
        expect(wisAtt).toBeInTheDocument()
        expect(chaAtt).toBeInTheDocument()


    })
})

describe('TraitsAndActions component', () => {

    it('should display all traits and actions if the beast have', () => {
        const GiantBadger = beasts[25]
        render(<TraitsAndActions actions={GiantBadger.actions} traits={GiantBadger.traits} />)

        if (GiantBadger.actions) {
            GiantBadger.actions.forEach((action: Action) => {
                console.log(action.name)
                const actionName = screen.queryByText(new RegExp(`${action.name}:`, "i"))
                expect(actionName).toBeInTheDocument()

            });
        }
        if (GiantBadger.traits) {
            GiantBadger.traits.forEach((trait: Trait) => {
                const traitName = screen.queryByText(new RegExp(`${trait.name}:`, "i"))
                expect(traitName).toBeInTheDocument()

            });
        }
    })

    it('should display only traits and not actions', () => {
        const Frog = beasts[24]
        render(<TraitsAndActions actions={Frog.actions} traits={Frog.traits} />)

        const actions = screen.queryByTestId("actions")
        const traits = screen.queryByTestId("traits")

        expect(actions).not.toBeInTheDocument()
        expect(traits).toBeInTheDocument
    })

    it('should display only actions and not traits', () => {
        const Ankylosaurus = beasts[1]
        render(<TraitsAndActions actions={Ankylosaurus.actions} traits={Ankylosaurus.traits} />)

        const actions = screen.queryByTestId("actions")
        const traits = screen.queryByTestId("traits")

        expect(actions).toBeInTheDocument()
        expect(traits).not.toBeInTheDocument()
    })
    it('should not display Traits or Actions', () => {

        const Giantfly = beasts[35]
        render(<TraitsAndActions actions={Giantfly.actions} traits={Giantfly.traits} />)

        const traits = screen.queryByTestId("traits")
        const actions = screen.queryByTestId("actions")

        expect(traits).toBeNull()
        expect(actions).toBeNull()

    })

    it('should display actions and traits', () => {

        const Allosaurus = beasts[0]
        render(<TraitsAndActions actions={Allosaurus.actions} traits={Allosaurus.traits} />)

        const traits = screen.queryByTestId("traits")
        const actions = screen.queryByTestId("actions")

        expect(actions).toBeInTheDocument()
        expect(traits).toBeInTheDocument()
    })

})