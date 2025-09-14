import styled from "styled-components";

export default function DisplayDays({dayNum}){

    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <div>
            {weekdays.map((day, i) =><Teste key={i} $isSelected={i === dayNum} >{day}</Teste>)}
        </div>
    )
}

const Teste = styled.span`
    background-color: white;
    ${({$isSelected}) => $isSelected && 'background-color:red;'}
`