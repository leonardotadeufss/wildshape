import { Action, Trait } from "src/types/types"

interface propType {
    traits: Array<Trait> | undefined,
    actions: Array<Action> | undefined
}
export default function TraitsAndActions({ traits, actions }: propType) {
    return (
        <>
            {traits &&
                <div data-testid="traits"> {
                    traits.map((trait: Trait) => {
                        return (
                            <div key={trait.name} className="mb-2">
                                <span className="fst-italic fw-bold">{trait.name}: </span>
                                <span>{trait.text}</span>
                            </div>
                        )
                    })
                }
                </div>
            }
            {actions &&
                <div data-testid="actions"> {
                    actions.map((action: Action) => {
                        return (
                            <div key={action.name} className="mb-2">
                                <span className="fst-italic fw-bold">{action.name}: </span>
                                <span>{action.text}</span>
                            </div>
                        )
                    })
                }
                </div>
            }
        </>
    )
};

