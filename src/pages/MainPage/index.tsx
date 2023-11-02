import { useEffect, useState } from "react";
import { Header } from "../../components/NavBar/Header";
import MyList from "../../components/MyList";
import SearchMusic from "../../components/SearchMusic";


export default function MainPage() {
    const [list, setList] = useState(false);

    useEffect(() => {
        console.log(setList)
    }, [])
    

    return (
        <>
            <Header></Header>
            {list ? (
                <MyList />
            ) : (
                <SearchMusic />
            )}
        </>
    );
}