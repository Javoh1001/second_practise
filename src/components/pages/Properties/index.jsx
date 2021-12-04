import React from 'react';
import { Container } from '../../../globalStyle';
import {Property} from './PropertyStyle';
import Star from './Images/Star.svg'
import Star2 from './Images/star_pink.svg';
import Person1 from './Images/Person11.jpg'
import Person2 from './Images/person2.png'
import Person3 from './Images/person3.png'

const Properties = () => {
    return (
        <>
            <Property id="properties">
                <Container>
                    <div className="property_title">
                        <h2>What People Say</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="cards">
                        
                        <div className="card">
                            <div className="circle_img">
                                <img src={Person1} alt="" />
                            </div>
                            <h4>Williamsons</h4>
                            <div className="stars">
                                <span><img src={Star} alt="" /> </span>
                                <span><img src={Star} alt="" /> </span>
                                <span><img src={Star} alt="" /> </span>
                                <span><img src={Star2} alt="" /> </span>
                                <span><img src={Star2} alt="" /> </span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui posuere nulla id feugiat morbi dictum. Nec enim mauris velit integer. Vitae varius interdum enim eget elementum. Eu velit tortor proin risus amet habitant.</p>
                        </div>
                        <div className="card">
                            <div className="circle_img">
                                <img src={Person2} alt="" />
                            </div>
                            <h4>Farhad Reja</h4>
                            <div className="stars">
                                <span><img src={Star} alt="" /> </span>
                                <span><img src={Star} alt="" /> </span>
                                <span><img src={Star} alt="" /> </span>
                                <span><img src={Star2} alt="" /> </span>
                                <span><img src={Star2} alt="" /> </span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui posuere nulla id feugiat morbi dictum. Nec enim mauris velit integer. Vitae varius interdum enim eget elementum. Eu velit tortor proin risus amet habitant.</p>
                        </div>
                        <div className="card card3">
                            <div className="circle_img">
                                <img src={Person3} alt="" />
                            </div>
                            <h4>Peter sams</h4>
                            <div className="stars">
                                <span><img src={Star} alt="" /> </span>
                                <span><img src={Star} alt="" /> </span>
                                <span><img src={Star} alt="" /> </span>
                                <span><img src={Star2} alt="" /> </span>
                                <span><img src={Star2} alt="" /> </span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui posuere nulla id feugiat morbi dictum. Nec enim mauris velit integer. Vitae varius interdum enim eget elementum. Eu velit tortor proin risus amet habitant.</p>
                        </div>
                    </div>
                </Container>
            </Property>
        </>
    )
}

export default Properties
