import * as S from './styles'

type TextFocus = {
    text: string,
    img: string,
}

export function SelectedFocusButton({ text, img }: TextFocus) {

    return (
        <S.CustomButtonSelected>
            <S.IconS src={img} width={32} height={32} alt={text} draggable="false" />
            <S.TextS>{text}</S.TextS>
        </S.CustomButtonSelected>
    )
}