import React from 'react';
import {Container,Button} from '../../../globalStyle';
import {
    AboutSection,
    AboutSectionContent,
    Content,
    SecondContent,
    MostPopularPlaces

} from './AboutStyle';

import AboutImg1 from './AboutImages/img1.jpg';
import AboutImg2 from './AboutImages/img2.jpg';
import AboutSupport from './AboutImages/aboutSupport.svg';
import AboutVector from './AboutImages/aboutVector.svg';

// second content images
import ImageLook from './AboutImages/imageLook.jpg';
import House from './AboutImages/house.svg'
import Apartment from './AboutImages/apartment.svg'
import Studio from './AboutImages/studio.svg'
import Villa from './AboutImages/villa.svg'

// Most popular images

import Bangladesh from './AboutImages/Bangladesh.jpg'
import Japan from './AboutImages/Japan.jpg'
import London from './AboutImages/London.jpg'
import Malaysia from './AboutImages/Malasia.jpg'
import India from './AboutImages/India.png'

const About = () => {
    return (
        <>
            <AboutSection>
                <Container>
                    <AboutSectionContent>
                        <Content>
                            <div className="about_text left_content">
                                <div className="content_img">
                                    <img src={AboutImg1} alt="AboutImg1" className="about_img1" />
                                </div>
                                    {/* <img src={AboutImg2} alt="AboutImg2" className="small_about_img" /> */}
                            </div>
                            <div className="about_text right_content">
                                <p className="about_us">About Us</p>
                                <h2>We are Specializing in <br />   interior Improvments</h2>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut viverra posuere sem purus enim eleifend <br /> habitant arcu, sed.</p>

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
                <SecondContent>
                    <Container>
                    <h1>What are you looking for?</h1>

                            <div className="second_image">
                                <div className="looking left_image">
                                    <img src={ImageLook} alt="" className="left_img" />
                                </div>
                                <div className="looking right_icons">
                                    <div className="right">
                                            <img src={House} alt="house" />
                                            <div className="icon_text">
                                                    <h4>Family House</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> In tempor pulvinar at augue vestibulum euismod risus</p>
                                            </div>
                                    </div>
                                    <div className="right">
                                            <img src={Apartment} alt="house" />
                                            <div className="icon_text">
                                                    <h4>Family House</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> In tempor pulvinar at augue vestibulum euismod risus</p>
                                            </div>
                                    </div>
                                    <div className="right">
                                            <img src={Studio} alt="house" />
                                            <div className="icon_text">
                                                    <h4>Family House</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> In tempor pulvinar at augue vestibulum euismod risus</p>
                                            </div>
                                    </div>
                                    <div className="right">
                                            <img src={Villa} alt="house" />
                                            <div className="icon_text">
                                                    <h4>Family House</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> In tempor pulvinar at augue vestibulum euismod risus</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                    </Container>     
                </SecondContent>
                <MostPopularPlaces>
                    <Container>
                      <div className="title">
                        <h2>Most Popular Places</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                      <div className="gallery">
                          <div className="gallery_img1 grid_col_2">
                              <img src={Bangladesh} alt="" />
                             <div className="span">
                                <span>Bangladesh</span>
                              <span className="small_span">50 Properties</span>
                             </div>
                          </div>
                          <div className="gallery_img1">
                              <img src={Japan} alt="" />
                              <div className="span">
                                <span>Bangladesh</span>
                              <span className="small_span">50 Properties</span>
                             </div>
                          </div>
                          <div className="gallery_img1">
                              <img src={London} alt="" />
                              <div className="span">
                                <span>Bangladesh</span>
                              <span className="small_span">50 Properties</span>
                             </div>
                          </div>
                          <div className="gallery_img1">
                              <img src={Malaysia} alt="" />
                              <div className="span">
                                <span>Bangladesh</span>
                              <span className="small_span">50 Properties</span>
                             </div>
                          </div>
                          <div className="gallery_img1">
                              <img src={India} alt="" />
                              <div className="span">
                                <span>Bangladesh</span>
                                <span className="small_span">50 Properties</span>
                             </div>
                          </div>
                          {/* <div className="gallery_img5">
                              <img src={India} alt="" />
                          </div> */}
                      </div>
                    </Container>
                </MostPopularPlaces>
            </AboutSection>
        </>
    )
}

export default About
