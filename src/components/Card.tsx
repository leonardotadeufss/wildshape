import Beast from "../types/types"

interface propType {
    beast: Beast
}
export default function Card({ beast }: propType) {
    const url = beast.name.replace(' ', '_')
    return (
        <a className="text-decoration-none" href={`/${url}`} key={url}>
            <div className="card my-3 text-center" style={{ height: "400px" }}>
                <div className="card-body">
                    <div className="card-img d-flex justify-content-center align-items-center" style={{ width: "100%", height: "250px" }}>
                        <img alt={beast.name} src={beast.img} className="mw-100 w-auto h-auto mh-100" />
                    </div>
                    <h2 className="fw-bold">{beast.name}</h2>
                    <p className="fst-italic">{beast.size} - CR {beast.cr}</p>
                    <div className="d-flex gap-1 justify-content-center">

                        {beast.traits?.map(trait => {
                            return (
                                <div key={trait.name + beast.name.replace(' ', "_")} className="badge text-bg-primary">{trait.name}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </a>
    )
};

