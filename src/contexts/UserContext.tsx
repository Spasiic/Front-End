import  {createContext, useState} from "react";

export const UserContext = createContext({ setAuth: (value: boolean) => {}, auth: false })

export function UserProvider({ children }: { children: React.ReactNode }){

    const [auth,setAuth] = useState(true)
/*     const [data,setData] = useState() */

    return(
        <UserContext.Provider value={{setAuth,auth}}>
            {children}
        </UserContext.Provider>
    )
}