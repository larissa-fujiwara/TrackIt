import { Content } from "../sharedStyles/stylesSetUp.js";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router";

export default function HomePage() {
    return (
        <>
            <Header>
                <img src={logo} alt="logo" />
            </Header>
            <Main>
                <Outlet />
            </Main>
            <Footer>
                <TabLink to='habits'>Habits</TabLink>
                <TabLink to='today'>Today</TabLink>
            </Footer>

        </>
    )
}


const Header = styled.header`
    padding: 4px 8px;
    img{
    width: 98px;
    height:48px;
    }
    background-color: #126BA5;
`

const Main = styled.main`
    background-color: aliceblue;
`

const Footer = styled.nav`
    background-color: pink;
    height:50px;
    position: fixed;
    width: 100%;
    bottom:0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const TabLink = styled(NavLink)`
    font-family:inherit;
    background-color: #FFFFFF;
    width: 100%;
    height: 100%;
    text-align: center;
    align-content: center;
    ;
    
    &.active{
        background-color: #52B6FF;

    }
`