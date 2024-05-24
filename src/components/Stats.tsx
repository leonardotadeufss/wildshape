interface propType {
    ac: number,
    hp: number,
    speed?: number | undefined,
    swim?: number | undefined,
    fly?: number | undefined,
    climb?: number | undefined
    burrow?: number | undefined
}
export default function Stats({ ac, hp, speed, climb, fly, swim, burrow }: propType) {
    return (<>
        <div className="d-flex flex-column">
            <div>
                <span className="fw-bold">Classe de armadura: </span> <span>{ac}</span>
            </div>
            <div>
                <span className="fw-bold">Pontos de vida: </span><span>{hp}</span>
            </div>
            <div>
                <span className="fw-bold">Movimento: </span>
                <span>{speed} ft
                    {climb ? `, escalada ${climb}ft` : ''}
                    {swim ? `, natação ${swim}ft` : ''}
                    {fly ? `, voo ${fly}ft` : ''}
                    {burrow ? `, escavação ${burrow}ft` : ''}
                </span>
            </div>
        </div>
    </>
    )
};

