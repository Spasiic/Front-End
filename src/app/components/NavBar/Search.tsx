import Image from "next/image";
import IconPesquisa from 'p/pesquisa.svg'

export function Search(){
    return(
        <div className="relative">
            <input className="w-[19.9rem] bg-gray h-10 rounded-full text-sm focus:outline-none text-branco pl-10 pr-2 placeholder:italic placeholder:opacity-75 appearance-none placeholder:text-[0.75rem] md:placeholder:text-[100%]" 
            type="search" name="search" placeholder="pesquisar música, artista ou letras"/>
            <button type="submit" className="absolute left-0 top-3 ml-[0.6rem]">
                <Image src={IconPesquisa} width={20} height={20} alt="Ícone de configuração"/>
            </button>
        </div>
    )
}