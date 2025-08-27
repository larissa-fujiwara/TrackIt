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

export const Form = styled.form`
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
    font-size: 1.25rem;
    padding: 8px;
    border: 2px solid #D4D4D4;
    border-radius: 4px;
    transition: 0.4s;
    outline: none;
    &:focus{
        border: 2px solid #666666;
    }
`

export const Button = styled.button`
    height: 2.75rem;
    font-size: 1.25rem;
    border-radius: 4px;
    border: none;
    background-color: #52B6FF;
    color: #FFFFFF;
`
export const NavLink = styled(Link)`
    color:#52B6FF;
`