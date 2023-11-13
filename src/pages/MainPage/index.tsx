import { useEffect, useState } from "react";
import { Header } from "../../components/NavBar/Header";
import MyList from "../../components/MyList";
import SearchMusic from "../../components/SearchMusic";
import { MainContainer } from "./style";
import { api } from "../../services/authAPI";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


export default function MainPage() {
  const { setAuth } = useContext(UserContext);
  const [list, setList] = useState(true);

  useEffect(() => {
    console.log(setList);
  }, []);

  async function logoutUser(){
    const response = api.logoutUser()
    if((await response).status == 200){
      localStorage.clear();
      setAuth(false)
    }
  }

  return (
    <MainContainer>
      <Header></Header>
      <button onClick={logoutUser}>logout</button>
      {list ? <MyList /> : <SearchMusic />}
    </MainContainer>
  );
}
