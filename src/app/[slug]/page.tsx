import Image from "next/image"
import Attributes from "src/components/Atrributes"
import beasts from "src/data/beasts"
import Beast, { Action, Trait } from "src/types/types"

export default function Page({ params }: { params: { slug: string } }) {
    const beast: Beast | undefined = beasts.find(element => element.name == params.slug)

    if (beast) {


        return (
            <div className="card w-75 mx-auto my-auto" style={{ height: "90vh" }}>
                <div className="row">
                    <div className="col-6">
                        <h1>{beast.name}</h1>
                        <p className="fst-italic">{beast.size} - CR {beast.cr}</p>

                        <hr></hr>
                        <p>Classe de armadura: {beast.ac}</p>
                        <p>Pontos de vida: {beast.hp}</p>
                        <p>Movimento: {beast.speed} ft</p>
                        <hr></hr>
                        <Attributes
                            str={beast.str}
                            dex={beast.dex}
                            con={beast.con}
                            int={beast.int}
                            wis={beast.wis}
                            cha={beast.cha}
                        />
                        <hr></hr>
                        <div>
                            {beast.skills && <p>Habilidades: {beast.skills} </p>}
                            {beast.vulnerabilities && <p>Vulnerabilidades: {beast.vulnerabilities} </p>}
                            {beast.resistances && <p>Resistências {beast.resistances}</p>}
                            {beast.immunities && <p>Imunidades a Dano: {beast.immunities} </p>}
                            {beast.conditionImmunities && <p>Imunidades a Condição : {beast.conditionImmunities}</p>}
                            <p>Sentidos : Percepção passiva {beast.passive} {beast.senses ? ',' + beast.senses : ''} </p>
                            {beast.languages && <p>Idiomas : {beast.languages}</p>}
                        </div>
                        <div>
                            {beast.traits &&
                                beast.traits.map((trait: Trait) => {
                                    return (
                                        <div key={trait.name}>
                                            <span className="fst-italic fw-bold">{trait.name}: </span>
                                            <span>{trait.text}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            {beast.actions &&
                                beast.actions.map((action: Action) => {
                                    return (
                                        <div key={action.name}>
                                            <span className="fst-italic fw-bold">{action.name}: </span>
                                            <span>{action.text}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-6" style={{ position: "relative" }}>
                        <Image src={beast.img} alt={beast.name} fill={true} />
                    </div>


                </div>
            </div>
        )
    }
}
export async function generateStaticParams() {
    return beasts.map((beast) => ({
        slug: beast.name,
    }))
}