import React,{useState} from 'react';
import {Nav, NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLink,NavBtnItem,Button} from './NavbarStyle';
import NavImage from './images/NavIcon.svg';
import {FaBars,FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';

const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () =>{
        setClick(!click);
    }
    return (
        <>
            <IconContext.Provider value={{color:'red'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <img src={NavImage} alt="NavLogo" /> 
                            <span>Building</span>
                        </NavLogo>  
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars />}
                        </MobileIcon >
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem><NavLink to="/">Home</NavLink></NavItem>
                            <NavItem><NavLink to="/services">Services</NavLink></NavItem>
                            <NavItem><NavLink to="/about">About Us</NavLink></NavItem>
                            <NavItem><NavLink to="/properties">Properties</NavLink></NavItem>
                            <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
                            <NavBtnItem>
                                <Button>Login</Button>
                            </NavBtnItem>
                        </NavMenu>
                        
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
