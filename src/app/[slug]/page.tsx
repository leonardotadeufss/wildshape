import Image from "next/image"
import Link from "next/link"
import Abilities from "src/components/Abilities"
import Attributes from "src/components/Attributes"
import Stats from "src/components/Stats"
import TraitsAndActions from "src/components/TraitsAndActions"
import beasts from "src/data/pt-br"
import Beast from "src/types/types"

export default function Page({ params }: { params: { slug: string } }) {
    const beastName = params.slug.replace("_", " ")
    const beast: Beast | undefined = beasts.find(element => element.name === beastName)

    if (beast) {


        return (
            <section className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <Link href={'/'} style={{ position: "absolute", left: "2rem", top: "2rem" }} className="btn btn-primary">
                    Voltar
                </Link>
                <div className="p-lg-5 mt-5 mt-lg-0" style={{ width: "85%" }}>
                    <div className="row justify-content-between flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 col-12 paperBackground py-3">
                            <h1 className="fw-bold">{beast.name}</h1>
                            <p className="fst-italic">{beast.size} - CR {beast.cr}</p>
                            <hr></hr>
                            <Stats ac={beast.ac} hp={beast.hp} speed={beast.speed} fly={beast.fly} climb={beast.climb} swim={beast.swim} burrow={beast.burrow} />
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
                            <Abilities
                                conditionImmunities={beast.conditionImmunities}
                                passive={beast.passive}
                                immunities={beast.immunities}
                                vulnerabilities={beast.vulnerabilities}
                                languages={beast.languages}
                                resistances={beast.resistances}
                                senses={beast.senses}
                                skills={beast.skills}
                            />
                            <hr />
                            <TraitsAndActions traits={beast.traits} actions={beast.actions} />
                        </div>
                        <div className="col-lg-6 col-12  mb-3 mt-5 my-lg-0 pt-5 pt-lg-0" style={{ position: "relative", zIndex: "-1", minHeight: "250px" }}>
                            <Image src={beast.img} alt={beast.name} fill style={{ objectFit: "contain" }} />
                        </div>


                    </div>
                </div>
            </section>
        )
    }
}
export async function generateStaticParams() {
    return beasts.map((beast) => ({
        slug: beast.name,
    }))
}