import React from 'react';
import {Container,Button} from '../../../globalStyle';
import {
    AboutSection,
    AboutSectionContent,
    Content,

} from './AboutStyle';

import AboutImg1 from './AboutImages/img1.jpg';
import AboutImg2 from './AboutImages/img2.jpg';
import AboutSupport from './AboutImages/aboutSupport.svg';
import AboutVector from './AboutImages/aboutVector.svg';


const About = () => {
    return (
        <>
            <AboutSection id="about">
                <Container>
                    <AboutSectionContent>
                        <Content>
                            <div className="about_text left_content">
                                <div className="content_img">
                                    <img src={AboutImg1} alt="AboutImg1" className="about_img1" />
                                    <div className="small_imgs">
                                        <img src={AboutImg2} alt="AboutImg2" className="small_about_img" />

                                    </div>
                                </div>
                            </div>
                            <div className="about_text right_content">
                                <p className="about_us">About Us</p>
                                <h2>We are Specializing in interior Improvments</h2>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Ut viverra posuere sem purus enim eleifend <br /> habitant arcu, sed.</p>

                                <div className="about_explore">
                                    <div className="explore_now about_consulting">
                                        <img src={AboutSupport} alt="" />
                                        <h4> Free Consulatation</h4>
                                        <p>Lorem ipsum dolor sit amet, conse <br /> ctetur adipiscing elit.</p>
                                    </div>
                                    <div className="explore_now about_memeber">
                                        <img src={AboutVector} alt="" />
                                        <h4>Best Team Members</h4>
                                        <p>Lorem ipsum dolor sit amet, conse <br /> ctetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <Button>Explore Now</Button>
                           </div>
                        </Content>
                        
                    </AboutSectionContent>
                </Container>
                
            </AboutSection>
        </>
    )
}

export default About
