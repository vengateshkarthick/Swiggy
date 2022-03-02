import React, {useState} from 'react'
function useMaincontent () {
    const [searchText, setSearchtext] = useState<string | undefined>("");

    return {
        searchText,
        setSearchtext
    }
}

export type MaincontentType = ReturnType<typeof useMaincontent>
export const MaincontentContext = React.createContext({} as MaincontentType) 

export const MaincontentProvider  = (props:any) => {
    const val = useMaincontent()
    return (
        <MaincontentContext.Provider value={val}>
            {props.children}
        </MaincontentContext.Provider>
    )
}