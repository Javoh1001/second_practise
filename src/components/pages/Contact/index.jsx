import React from 'react';
import { Container } from '../../../globalStyle';
import {ContactSection,ContactContent,Footer} from './ContactStyle';
import FooterLogo from './images/footer_logo.svg';
import {Link} from 'react-router-dom';

// footer images

import VectorPhone from './images/VectorPhone.svg'
import Goggle from './images/google3.jpg'
import PlayStore from './images/playstore.svg'

const Contact = () => {
    return (
        <>
            <ContactSection id="contact">
                <Container>
                    <ContactContent>
                        <div className="form" >
                            <h3>For Daily Update Subscribe Now</h3>
                            <form>
                               <div className="input">
                                    <input type="email" placeholder="Enter Your Mail.." />
                                    <button type="submit">Subscribe</button>
                               </div>
                            </form>
                        </div>
                    </ContactContent>
                </Container>
            </ContactSection>
            <Footer>
                <Container>
                    <div className="footer_content">
                        <div className="footer1">
                           <ul>
                               <li><Link to="/"> <img src={FooterLogo} alt="" /></Link></li>
                               <li> <span>Building</span></li>
                           </ul>
                           <p>Lorem ipsum dolor sit amet, consectet  adipiscing elit. Quam turpis sed ut fam  tortor pharetra. Lorem auctor congue pellentesque facilisis diam</p>
                        </div>
                        <div className="footer footer_logo">
                           <ul>
                               <h4>Home</h4>
                               <li><Link to="/">Process</Link></li>
                               <li><Link to="/">Listing</Link></li>
                               <li><Link to="/">Popular Property</Link></li>
                               <li><Link to="/">Out Agents</Link></li>
                               <li><Link to="/">Testimonial</Link></li>
                           </ul>
                          
                        </div>
                        <div className="footer footer_logo">
                           <ul>
                               <h4>Servies</h4>
                               <li><Link to="/">Site map</Link></li>
                               <li><Link to="/">Property type</Link></li>
                               <li><Link to="/">Terms and conditions</Link></li>
                               <li><Link to="/">Privacy policy</Link></li>
                              
                           </ul>
                          
                        </div>
                        <div className="footer footer_logo">
                           <ul>
                               <h4>About</h4>
                               <li><Link to="/">About us</Link></li>
                               <li><Link to="/">Who choose us?</Link></li>
                               <li><Link to="/">Events</Link></li>
                               <li><Link to="/">Blog</Link></li>
                               
                           </ul>
                          
                        </div>
                        <div className="footer2 footer_logo">
                           <ul>
                               <h4>Contact</h4>
                               <li><Link to="/"><img src={VectorPhone} alt="" />+888 561 258</Link></li>
                               <li><Link to="/"><img src={Goggle} alt="" /> webmaile@gmail.com</Link></li>
                               <li><Link to="/"><img src={PlayStore} alt="" /> Google play</Link></li>
                           </ul>
                          
                        </div>
                    </div>
                </Container>
            </Footer>
        </>
    )
}

export default Contact
