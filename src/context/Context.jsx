import { createContext, useState, useEffect, useContext } from "react";

export const Context = createContext();


const ContextProvider = (props) =>{
    
    const [loaded, setLoaded] = useState(false);
    const [loadedProjects, setLoadedProjects] = useState(false);
    const [loadedAbout, setLoadedAbout] = useState(false);
    const [scroll, setScroll] = useState(false);
    
    //dit zijn de values die in de contextprovider worden gestopt, als je dan bij main.jsx contenprovider om app heen zet, gelden deze values voor de gehele app waardoor je maar 1 context file nodig hebt voor alle context
    const contextValue = {
        loaded,
        setLoaded,  
        loadedProjects,
        setLoadedProjects,
        loadedAbout,
        setLoadedAbout,
        scroll,
        setScroll
    }
    
    return(
        <Context.Provider value={contextValue}>
        {props.children}
        </Context.Provider>
)
}

export default ContextProvider