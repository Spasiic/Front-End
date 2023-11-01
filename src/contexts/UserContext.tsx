
import { createContext, useState, ReactNode } from "react";
import { UserContextType } from "../types/UserContextType";

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [auth, setAuth] = useState(false);
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
