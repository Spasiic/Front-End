import { useEffect, useState } from "react";
import { Header } from "../../components/NavBar/Header";
import MyList from "../../components/MyList";
import SearchMusic from "../../components/SearchMusic";
import { MainContainer } from "./style";

export default function MainPage() {
  const [list, setList] = useState(true);

  useEffect(() => {
    console.log(setList);
  }, []);

  return (
    <MainContainer>
      <Header></Header>
      {list ? <MyList /> : <SearchMusic />}
    </MainContainer>
  );
}
