interface propType {
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number
}

export default function Attributes({ str, dex, con, int, wis, cha }: propType) {
    const strBonus = Math.floor((str - 10) / 2)
    const dexBonus = Math.floor((dex - 10) / 2)
    const conBonus = Math.floor((con - 10) / 2)
    const intBonus = Math.floor((int - 10) / 2)
    const wisBonus = Math.floor((wis - 10) / 2)
    const chaBonus = Math.floor((cha - 10) / 2)

    return (
        <div className="d-flex w-75 justify-content-around">
            <div>
                <h4>FOR</h4><p>{str} ({strBonus > 0 ? '+' : ""}{strBonus})</p>
            </div>
            <div>
                <h4>DEX</h4><p>{dex} ({dexBonus > 0 ? '+' : ""}{dexBonus})</p>
            </div>
            <div>
                <h4>CON</h4><p>{con} ({conBonus > 0 ? '+' : ""}{conBonus})</p>
            </div>
            <div>
                <h4>INT</h4><p>{int} ({intBonus > 0 ? '+' : ""}{intBonus})</p>
            </div>
            <div>
                <h4>SAB</h4><p>{wis} ({wisBonus > 0 ? '+' : ""}{wisBonus})</p>
            </div>
            <div>
                <h4>CAR</h4><p>{cha} ({chaBonus > 0 ? '+' : ""}{chaBonus})</p>
            </div>
        </div>

    )
};

