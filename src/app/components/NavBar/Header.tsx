import Image from "next/image";

import Logo from 'p/logo.svg'
import IconConfig from 'p/configurações.svg'
import IconList from 'p/lista.svg'
import IconSearchMusic from 'p/pesquisamusica.svg'

import { FocusButton } from "../Buttons/FocusButton";
import { Search } from "./Search";

export function Header(){

    return(
        <header className="m-4 flex flex-col md:flex-row justify-between items-center overflow-y-hidden">
            <Image src={Logo} height={89} width={127} alt="Logo MyMusicList" className="mb-2 hidden lg:block"/>

            <nav className="flex flex-col-reverse md:flex-row gap-4">
                <div className="flex gap-2">
                    <FocusButton text="minha lista" img={IconList} />
                    <FocusButton text="pesquisar músicas" img={IconSearchMusic} />
                </div>

                <section className="flex flex-row gap-2">
                    <Search/>
                    <Image src={IconConfig} height={26} width={26} alt="Ícone de configuração" className="hidden lg:block"/>
                </section>
            </nav>
        </header>
    )
}