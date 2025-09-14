import { Link } from "react-router";
import styled from "styled-components";

export const Content = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px;
    background-color: #FFFF;
`

export const FormArea = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    row-gap: 8px;
    @media (min-width: 450px) {
        max-width:450px;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 2.75rem;
    font-size:${({$isHabit}) => $isHabit ? '1rem' : '1.25rem' };
    padding: 8px;
    border: 2px solid #D4D4D4;
    border-radius: 4px;
    transition: 0.4s;
    outline: none;
    &:focus{
        border: 2px solid #666666;
    }
    &:disabled{
        color: #AFAFAF;
        background-color: #D4D4D4;
        opacity:0.5;
    }
    ${({$isHabit}) => $isHabit && `&::placeholder{color: #DBDBDB;}`}
`

export const Button = styled.button`
    ${({$isHabit}) => $isHabit && 'width: 5.25rem;'}
    height:${({$isHabit}) => $isHabit ? '2.25rem' : '2.75rem' };
    font-size:${({$isHabit}) => $isHabit ? '1rem' : '1.25rem' };
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: none;
    background-color:${({$cancel}) => $cancel ? '#FFFFFF' : '#52B6FF' };
    color:${({$cancel}) => $cancel ? '#52B6FF' : '#FFFFFF' };
    &:disabled{
        opacity: 0.7;
    }
`
export const ActionLink = styled(Link)`
    color:#52B6FF;
`

export const H1 = styled.h1`
    font-size:1.25rem;
    font-weight: 400;
    color:#126BA5;
`
export const HabitContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    margin-top: 20px;
    background-color: #FFFFFF;
    img{
        width: 20%;
        height:20%;
    }
`