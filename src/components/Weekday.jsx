import { useState } from "react";
import styled from "styled-components"

export default function Weekday ({day, dayNum, days, setDays, loading}) {

    const [isSelected, setIsSelected] = useState(false);

    function updateDays(){

        if(days.includes(dayNum)){
            setDays(days.filter(day => day !== dayNum));
            setIsSelected(false);

        }else{
            setDays([...days, dayNum]);
            setIsSelected(true);
        }

    }


    return (
        <DayOption type="button" disabled={loading} onClick={updateDays} $isSelected={isSelected}>{day}</DayOption>
    )
}

const DayOption = styled.button`
    width: 100%;
    border-radius: 4px;
    border: 2px solid #D4D4D4;
    color:${({$isSelected}) => $isSelected ? '#FFFFFF' : '#D4D4D4' } ;
    background-color: ${({$isSelected}) => $isSelected ? '#CFCFCF' : 'transparent' };
    
`