import React from 'react';
import {Container} from '../../../globalStyle';
import {
    SerSection,
    SecondContent,
    MostPopularPlaces,
    ChooseUs,
    ChooseContent

} from './ServicesStyle';


// second content images
import ImageLook from './images/imageLook.jpg';
import House from './images/house.svg'
import Apartment from './images/apartment.svg'
import Studio from './images/studio.svg'
import Villa from './images/villa.svg'

// Most popular images

import Bangladesh from './images/Bangladesh.jpg'
import Japan from './images/Japan.jpg'
import London from './images/London.jpg'
import Malaysia from './images/Malasia.jpg'
import India from './images/India1.jpg';


import ChooseImg from './images/service.png'



const Services = () => {
    return (
        <>
            <SerSection id="services">
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
                      </div>
                    </Container>
                </MostPopularPlaces>
                <ChooseUs>
                    <Container>
                        <ChooseContent>
                            <div className="choose choose_left">
                                <h2>Who Choose Us?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio laoreet sit neque sagittis. Gravida viverra at auctor sed aliquam. Sed magna eros  lectus amet, viverra. Ultrices diam, volutpat sit ut feugiat semper interdum dapibus. Et malesuada tempus lacus at ornare  gravida ornare nulla dui. Velit tellus elit consectetur dui vel convallis eu in lectus. Vitae  id est, suspendisse suspendisse.</p>

                            </div>
                            <div className="choose choose_right">
                                <img src={ChooseImg} alt="choose img" />
                            </div>
                        </ChooseContent>
                    </Container>
                </ChooseUs>
            </SerSection>
        </>
    )
}

export default Services
