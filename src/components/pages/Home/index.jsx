import React from 'react';
import {Container} from '../../../globalStyle';
import {IoIosArrowDown} from 'react-icons/io';



import {
    HomeSection,
    HomeContent,
    HomeTable,
    TableLink,
    Button
} from './HomeStyle';

const Home = () => {
    return (
        <>
            <HomeSection>
                <Container>
                    <HomeContent>
                        <h1>Find Your Drem House</h1>
                        <p className="content_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra <br /> posuere sem purus enim eleifend habitant arcu, sed.</p>
                        <HomeTable>
                            <div className="home_location location">
                               <div className="border">
                                    <div className="location_text">
                                            <span>Location </span>
                                            <TableLink to="/"><IoIosArrowDown /></TableLink>
                                    </div>
                                    <p>California</p>
                                </div>
                            </div>
                            <div className="home_location proporties">
                               <div className="border">
                                    <div className="location_text">
                                        <span>Properties </span>
                                        <TableLink to="/"><IoIosArrowDown /></TableLink>
                                    </div>
                                    <p> Delux</p>
                               </div>
                            </div>
                            <div className="home_location price">
                               <div className="border">
                                    <div className="location_text">
                                        <span>Price </span>
                                        <TableLink to="/"><IoIosArrowDown /></TableLink>
                                    </div>
                                    <p>$10,000-$12,0000</p>
                               </div>
                            </div>
                             <div className="home_location search">
                                <div className="bordr"><Button>Search</Button></div>
                            </div>
                        </HomeTable>
                    </HomeContent>

                </Container>
            </HomeSection>
        </>
    )
}

export default Home
