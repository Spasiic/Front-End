import { createContext, useState, ReactNode } from "react";
import { UserContextType } from "../types/UserContextType";
import { LoginType } from "../types/LoginType";
import { api } from "../services/authAPI";

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState(false);

  const loginUser = async (dataLogin: LoginType) => {
    try {
      const response = await api.loginUser(dataLogin);
      const accessToken = response.data.access;

      if (response.status === 200) {
        localStorage.clear();
        localStorage.setItem("@AuthToken:", accessToken);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (error) {
      console.error("Erro no login: ", error);
      setAuth(false);
    }
  };

  const contextValue: UserContextType = {
    setAuth: (value) => setAuth(value),
    auth,
    loginUser
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
