import IconPlus from '/assets/plus.svg'
import * as S from './styles'

type TextFilter = {
    text: string
}

export function FilterButton ({text} : TextFilter) {
    return(
        <S.CustomButtonFilter>
            <S.Icon src={IconPlus} width={16} height={16} alt="Ícone de Adicionar"/>
            <S.Text>{text}</S.Text>
        </S.CustomButtonFilter>
    )
}