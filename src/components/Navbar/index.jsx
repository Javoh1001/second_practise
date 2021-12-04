import React,{useState} from 'react';
import {Nav, NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLink,NavBtnItem,Button} from './NavbarStyle';
import NavImage from './images/NavIcon.svg';
import {FaBars,FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { Link } from "react-scroll";

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
                            <NavItem> 
                                <NavLink
                                onClick={handleClick}
                                click={click}
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}>Home</NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink
                                onClick={handleClick}
                                click={click}
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}>About Us</NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink
                                  onClick={handleClick}
                                  click={click}
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}>Services</NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink
                                onClick={handleClick}
                                click={click}
                                activeClass="active"
                                to="properties"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}>Properties</NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink
                                onClick={handleClick}
                                click={click}
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}>Contact</NavLink>
                            </NavItem>
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
