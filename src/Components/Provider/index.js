import { createContext, useState } from "react";

export const Context = createContext();

const Provider = ({children}) => {
    const [templates, setTemplates] = useState([]);

    return (
        <Context.Provider value={{
            templates,
            setTemplates,
        }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;