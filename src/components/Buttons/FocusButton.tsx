import * as S from './styles'

type TextFocus = {
    text: string,
    img: string,
    onClick: () => void,
    selected: boolean,
}

export function FocusButton({ text, img, onClick, selected }: TextFocus) {

    return (
        <S.CustomButtonFocus
            className={`${selected ? "purple" : "black"}`}
            onClick={onClick}
        >
            <S.IconFC src={img} width={32} height={32} alt={text} draggable="false" />
            <S.TextFC className="capitalize">{text}</S.TextFC>
        </S.CustomButtonFocus>
    )
}
