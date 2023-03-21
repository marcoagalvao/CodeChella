import { createContext, useState } from "react";

export const DadosContext = createContext();
DadosContext.displayName = "Dados";

export const DadosProvider = ({ children }) => {
    const [nome, setNome] = useState("");
    const [ingresso, setIngresso] = useState("");

    return(
        <DadosContext.Provider value={{nome, setNome, ingresso, setIngresso}}>
            {children}
        </DadosContext.Provider>
    )
}