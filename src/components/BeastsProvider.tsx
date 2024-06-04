'use client'

import { ReactNode, useState } from "react";
import Beast from "src/types/types";
import { createContext } from "react";
import beasts from "src/data/pt-br";

interface PropsBeastContext {
    beastsInView: Beast[];
    setBeasts: React.Dispatch<React.SetStateAction<Beast[]>>;
}

const BeastsContext = createContext<PropsBeastContext>({
    beastsInView: [],
    setBeasts: () => { }
});

interface propType {
    children: ReactNode;
}

export default function BeastContextProvider({ children }: propType) {
    const [beastsInView, setBeasts] = useState<Array<Beast>>(beasts)
    return (
        <BeastsContext.Provider value={{ beastsInView, setBeasts }}>
            {children}
        </BeastsContext.Provider>
    )
};

export { BeastsContext }