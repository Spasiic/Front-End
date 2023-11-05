
import { createContext, useState, ReactNode } from "react";
import { UserContextType } from "../types/UserContextType";

export const UserContext = createContext<UserContextType>({
    setAuth: () => { },
    auth: false,
});

export function UserProvider({ children }: { children: ReactNode }) {
    const [auth, setAuth] = useState(true);
    const contextValue: UserContextType = {
        setAuth: (value) => setAuth(value),
        auth,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}
