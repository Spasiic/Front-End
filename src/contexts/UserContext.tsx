import { createContext, useState, ReactNode } from "react";
import { UserContextType } from "../types/UserContextType";
import { LoginType } from "../types/LoginType";
import { api } from "../services/authAPI";

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState(false);
  const [listMusics, setListMusics] = useState([])
  const [wishlist, setWishlist] = useState(false)
  const [listWishlist,setListWishlist] = useState([])
  const [user,setUser] = useState([])
  const [alarmes,setAlarmes] = useState([])

  function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  const loginUser = async (dataLogin: LoginType) => {
    try {
      const response = await api.loginUser(dataLogin);
      const accessToken = response.data.access;

      if (response.status === 200) {
        localStorage.clear();
        localStorage.setItem("@AuthToken:",accessToken);
        setUser(parseJwt(accessToken))
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
    loginUser,
    setListMusics,
    listMusics,
    setWishlist,
    wishlist,
    user,
    listWishlist,
    setListWishlist,
    setAlarmes,
    alarmes
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
