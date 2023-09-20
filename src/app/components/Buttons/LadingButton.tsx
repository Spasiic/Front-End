type TextButton ={
    text: string
}

export function LandingButton({text} : TextButton){
    return(
        <button className="bg-[#515151] w-[max-content] h-auto p-4 uppercase rounded-full text-center font-semibold text-subtitle hover:shadow-button-shadow duration-300">
            {text}
        </button>
    )
}