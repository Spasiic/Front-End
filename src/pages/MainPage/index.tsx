import { useEffect, useState } from "react";
import { Header } from "../../components/NavBar/Header";
import MyList from "../../components/MyList";
import SearchMusic from "../../components/SearchMusic";
import { MainContainer } from "./style";
import { api } from "../../services/authAPI";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Alarme from "../../components/Alarme";


export default function MainPage() {
  const { setAuth,setListMusics,listMusics,wishlist,user,setListWishlist,listWishlist,alarmes } = useContext(UserContext);
  const [alarmePopUP,setAlarmePopUP] = useState(false)
  const [infoMusic,setInfoMusic] = useState([])

  useEffect(() => {
    ListAllMusics();
    userWishlist(user.user_id);
  }, [listWishlist]);

  async function ListAllMusics(){
    const response = api.allMusics()
    if((await response).status == 200){
      setListMusics((await response).data.results)
    }
  }

  async function userWishlist(userID){
    const reponse = await api.getWishlist(userID)
    if(reponse.status == 200){
      setListWishlist(reponse.data.results)
    }
  }

  useEffect(() => {
    const verificarAlarme = () => {
      const dataAtual = new Date();
      dataAtual.setSeconds(0);
      dataAtual.setMilliseconds(0);
  
      alarmes.forEach(async (alarme) => {
        const dataAlarme = new Date(alarme.data);
        dataAlarme.setSeconds(0);
        dataAlarme.setMilliseconds(0);

        if (
          dataAtual.getFullYear() === dataAlarme.getFullYear() &&
          dataAtual.getMonth() === dataAlarme.getMonth() &&
          dataAtual.getDate() === dataAlarme.getDate() &&
          dataAtual.getHours() === dataAlarme.getHours() &&
          dataAtual.getMinutes() === dataAlarme.getMinutes()
        ) try {
          const response = await api.getMusicID(alarme.music_id);
          setInfoMusic(response.data)
          setAlarmePopUP(true)
        } catch (error) {
          console.error("Erro ao buscar música:", error);
        }
      });
    };
  
    const interval = setInterval(verificarAlarme, 60000);
    return () => clearInterval(interval);
  }, [alarmes]);
  
  useEffect(() => {
    let timer;
  
    if (alarmePopUP) {
      timer = setTimeout(() => {
        setAlarmePopUP(false);
      }, 30000); 
    }
  
    return () => clearTimeout(timer);
  }, [alarmePopUP]);
  

  return (
    <MainContainer>
      <Header></Header>
      <div className="content">
      {alarmePopUP && infoMusic && <Alarme name={infoMusic.name} author={infoMusic.album_info.author_info.name} image={infoMusic.album_info.image}/>}
      {wishlist ? <MyList /> : <SearchMusic />}
      </div>
    </MainContainer>
  );
}
