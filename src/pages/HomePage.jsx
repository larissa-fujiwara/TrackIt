import logo from "../assets/logo.svg";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router";

export default function HomePage() {
    return (
        <>
            <Header>
                <img src={logo} alt="logo" />
                <img src="https://i.pinimg.com/736x/1e/aa/68/1eaa6875cf7569733c98484bf90485c1.jpg" alt="profile-pic" />
            </Header>
            <Main>
                <Outlet />
            </Main>
            <Footer>
                <TabLink to='habits'>Hábitos</TabLink>
                <TabLink to='today'>Hoje</TabLink>
            </Footer>

        </>
    )
}


const Header = styled.header`
    width: 100%;
    height: 12vh;
    padding:8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left:0;
    background-color: #126BA5;
    img{
        width: 98px;
        height:48px;
    }
    img:nth-child(2){
        width: 52px;
        height:52px;
        border-radius: 24px;
    }
`

const Main = styled.main`
    height: calc(100vh - 12vh - 10vh);
    margin-top: 12vh;
    padding: 12px;
    overflow-y: scroll;
    background-color: #F2F2F2;    
`

const Footer = styled.nav`
    width: 100%;
    height:10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom:0;
    left: 0;
`

const TabLink = styled(NavLink)`
    width: 100%;
    height: 100%;
    align-content: center;
    text-align: center;
    text-decoration:none;
    background-color: #FFFFFF;
    color:#D4D4D4;
    transition:0.1s;
    &.active{
        background-color: #52B6FF;
        color:#FFFFFF;
    }
`