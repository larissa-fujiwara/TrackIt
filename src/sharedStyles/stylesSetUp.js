import styled from "styled-components";

export const Content = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px;
    background-color: red;
`
export const Input = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius: 4px;
    &::placeholder{
        padding: 0 8px;
    }
`