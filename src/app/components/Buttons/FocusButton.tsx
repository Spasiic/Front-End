import Image, { StaticImageData } from "next/image"

type TextFocus ={
    text: string,
    img: StaticImageData,
}

export function FocusButton ({text,img} : TextFocus) {

    return(
        <button className="h-[3rem] flex gap-2 text-center items-center p-4 rounded-md bg-black hover:bg-purple duration-300 text-[0.75rem] lg:text-[100%]">
            <Image src={img} width={32} height={32} alt={text}/>
            <p className="capitalize">{text}</p>
        </button>
    )
}