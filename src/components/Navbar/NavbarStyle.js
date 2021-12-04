import styled from 'styled-components';
import {Container} from '../../globalStyle';
import {Link} from 'react-router-dom';


export const Nav = styled.nav`
    background-color:#011522;
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.2rem;
    position:sticky;
    top:0;
    z-index:999;

    &:hover{
        
    }
`
export const NavbarContainer = styled(Container)`
    display:flex;
    justify-content:space-between;
    height:80px;
    align-items:center;

    ${Container};
`

export const NavLogo = styled(Link)`
    color:#fff;
    justify-self:flex-start;
    cursor:pointer;
    text-decoration:none;
    font-size:2rem;
    display:flex;
    align-items:center;
    span{
        padding-left:10px;
        font-size:1.8rem;
    }
    
`

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width:991px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,100%);
        font-size:2rem;
        cursor:pointer;
        color:#fff;
    }
`
export const NavMenu = styled.ul`
    list-style:none;
    display:flex;
    align-items:center;
    text-align:center;

    @media screen and (max-width:991px){
        display:flex;
        flex-direction:column;
        width:100%;
        height:90vh;
        position:absolute;
        top:80px;
        left:${({click})=>(click ? 0 : '-100%')};
        opacity:1;
        transition:all .5s linear;
        background:#101522;
    }
`
export const NavItem = styled.li`
    height:80px;
    border-bottom:2px solid transparent;

    &:hover{
        border-bottom:2px solid #4b59f7;
    }

    @media screen and (max-width:991px){
        width:100%;

        &:hover{
            border:none;
        }
    }
`
export const NavLink = styled(Link)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0.5rem 2rem;
    height:100%;
    font-size:1.8rem;
    white-space:nowrap;

    @media screen and (max-width:1200px){
        font-size:1.6rem;
    }
    @media screen and (max-width:991px){
        text-align:center;
        justify-content:center;
        padding:2rem;
        width:100%;
        display:flex;
        font-size:1.6rem;

        &:hover{
            color:#4b59f7;
            transition:all .5s linear;
        }
    }
`

export const NavBtnItem = styled.li`
    padding-left:10rem;
    @media screen and (max-width:991px){
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        padding-left:0;
        
    }
`
export const Button = styled.button`
    display:flex;
    border:none;
    width:9rem;
    align-items:center;
    justify-content:center;
    height:4rem;
    border-radius:.6rem;
    background:#19BCE4;
    font-size:1.6rem;
   
    cursor:pointer;

   
`