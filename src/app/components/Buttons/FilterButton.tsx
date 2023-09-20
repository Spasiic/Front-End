import Image from "next/image"
import IconPlus from 'p/plus.svg'

type TextFilter = {
    text: string
}

export function FilterButton ({text} : TextFilter) {
    return(
        <button className="w-[max-content] p-1 flex gap-1 text-center items-center bg-gray rounded-full">
            <Image src={IconPlus} width={16} height={16} alt="Ícone de Adicionar" className="m-1" />
            <p className="text-white font-medium text-[16px] mr-2">{text}</p>
        </button>
    )
}