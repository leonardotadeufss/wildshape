'use client'

import { useContext } from "react"
import { BeastsContext } from "./BeastsProvider"
import Beast from "src/types/types"
import Card from "./Card"

export default function CardsContainer() {
    const { beastsInView, setBeasts } = useContext(BeastsContext)

    return (

        <div className='row'>
            {
                beastsInView.map((beast: Beast) => {
                    return (
                        <div className="col-lg-4 col-12" key={beast.name.replaceAll(' ', '_')}>
                            <Card beast={beast} />
                        </div>
                    )
                })
            }
        </div>
    )
};

