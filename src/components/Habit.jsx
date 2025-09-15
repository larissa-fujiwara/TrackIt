import styled from "styled-components"

export default function Habit({ name, arrayDays }) {

    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (

        <HabitCard>
            <p>{name}</p>
            <WeekdayContainer>
                {weekdays.map((day, i) =>
                    <Day key={i} $isSelected={arrayDays.includes(i) ? true : false}>{day}</Day>
                )}
            </WeekdayContainer>
        </HabitCard>
    )
}

const Day = styled.span`
    width: 1.88rem;
    height: 1.88rem;
    font-size: 1.13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border:2px solid #CFCFCF;
    border-radius: 5px;
    ${({$isSelected}) => $isSelected ? 'background-color: #CFCFCF;' : 'background-color: transparent;'}
    ${({$isSelected}) => $isSelected ? 'color: #FFFFFF;' : 'color:#DBDBDB;'}
`

const WeekdayContainer = styled.div`
    width: 100%;
    display: flex;
    column-gap: 8px;

`

const HabitCard = styled.div`
    padding: 12px;
    margin-top: 8px;
    display:flex;
    flex-direction: column;
    row-gap: 16px;
    
    background-color: #FFFFFF;
    p{
        color:#666666;
        font-size: 1.25rem;
    }
`