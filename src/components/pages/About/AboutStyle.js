import styled from 'styled-components';
import AboutImg1 from './AboutImages/img1.jpg';

export const AboutSection = styled.div`
    
`
export const AboutSectionContent = styled.div`

`
export const Content = styled.div`
    display:flex;
    padding:12rem 0 17rem 0;

    .about_text{
        width:calc(50% - 15px);
    }
    .left_content{
        z-index:110;
        position:relative;
        .content_img{
            width:95%;
        }
        .about_img1{
            width:100%;
           
        }
        .small_about_img{
            width:40.8%;
            // height:16rem;
            position:absolute;
            left:35rem;
            bottom:4.5rem;
            z-index:111;
            background-attachment:fixed;
        }
    }
    .right_content{
        margin-left:30px;
        .about_us{
            font-size:2rem;
            font-weight:400;
            color:#02012B
        }
        h2{
            font-size:4.4rem;
            font-weight:700;
            margin:1rem 0 2.4rem 0;
            color:#222222
        }
        .text{
            font-size:2rem;
            font-weight:400;
            color:#555555;
        }


        .about_explore{
            margin-top:4rem;
            display:flex;
            .explore_now{
                width:50%;
            }
            img{
                // margin-bottom:2.4rem;
            }
            h4{
                font-size:2.4rem;
                font-weight:500;
                color:#222;
                margin:2.4rem 0 1.6rem 0;
            }
            p{
                font-size:1.4rem;
                font-weight:normal;
                color:#555;
            }
            @media screen and (max-width:1300px){
              
                h4{
                    font-size:2rem;
                    // margin:2.4rem 0 1.6rem 0;
                }
            }
            @media screen and (max-width:576px){
                flex-direction:column;
                align-items:center;
                justify-content:center;
                width:100%;
                .explore_now{
                    width:100%;
                    margin-top:3rem;
                }
            }
        }

        @media screen and (max-width:1300px){
            h2{
                font-size:4rem;
            }
            .text{
                font-size:1.8rem;
            }
        }
        @media screen and (max-width:576px){
            h2{
                font-size:3rem;
            }
            .text{
                font-size:1.6rem;
            }
        }
       
    }
    @media screen and (max-width:1200px){
        flex-direction:column;
        .about_text{
            width:calc(100%);
            margin-top:5rem;
            .content_img{
                width:100%;
            }
        }
    }
   
`
export const SecondContent = styled.div`
    padding:10rem 0 19rem 0;
    background-color:#F8FDFE;
    
    h1{
        font-size:4.8rem;
        font-weight:700;
        color:#222;
        margin-bottom:7rem;
    }

    .second_image{
        display:flex;
        .looking{
            width:50%;
        }
        .left_image{
           .left_img{
                width:95.2%;
           }
        }
        .right_icons{
            // padding-left:3rem;
            
            .right{
                display:flex;
                align-items:center;
                margin-bottom:2rem;
                background-color:#fff;
                padding:2.4rem;
                width:100%;
                .icon_text{
                    padding-left:3rem;
                    h4{
                        font-size:2rem;
                        color:#222;
                        font-weight:500;
                        margin-bottom:1.2rem;
                    }
                    p{
                        font-size:1.4rem;
                        color:#555;
                        font-weight:400;
                    }
                    @media screen and (max-width:1300px){
                        h4{
                            font-size:1.8rem;
                        }
                        p{
                            font-size:1.2rem;
                        }
                    }
                }

              
               
            }
            @media screen and (max-width:1200px){
                width:100%;
                display:flex;
                flex-wrap:wrap;
                .right{
                    width:calc(50% - 15px);
                    display:flex;
                    margin-left:1.5rem;
                }
            }
            @media screen and (max-width:768px){
                width:100%;
                display:flex;
                flex-wrap:wrap;
                .right{
                    width:100%;
                }
            }
        }

        @media screen and (max-width:1200px){
            display:flex;
            flex-wrap:wrap;
            .looking{
                width:100%;
                margin-top:3rem;
            }
            .left_image{
                .left_img{
                     width:100%;
                }
             }
        }
    }
`

export const MostPopularPlaces = styled.div`
    padding:10rem 0 10rem 0;
    .title{
        text-align:center;
        margin-bottom:3rem;
        h2{
            font-size:4.8rem;
            font-weight:700;
            color:#222;
            margin-bottom:2rem;
        }
        p{
            color:#555;
            font-size:2rem;
        }
    }
    .gallery{
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        grid-auto-rows:25rem;
        grid-gap:1rem;

        .grid_col_2{
            grid-column:span 1;
            grid-row:span 2;
        }
        .gallery_img1{
            position:relative;
            overflow:hidden;
            transition:all .5s linear;
            img{
                width:100%;
                height:100%;
                object-fit:cover;
                &:hover{
                    transform:scale(1.2);
                    transition:all .4s linear;
                    cursor:pointer;
                }
            }
            .span{
                width:18rem;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                height:8rem;
                display:flex;
                position:absolute;
                top:55%;
                left:50%;
                transform:translate(-50%,-10%);
                font-size:1.8rem;
                background: rgba(0, 96, 119, 0.02);
                background-color:#006077 2%;
                padding:2rem;
                backdrop-filter: blur(11px);
                color:#fff;
                span{
                    display:flex;
                    font-weight:500;
                }
                .small_span{
                    font-size:1.6rem;
                    color:#DDDDDD;
                    font-weight:400;
                }
            }
        }
       


        @media screen and (max-width:1200px){
            grid-template-columns:repeat(2,1fr);
        }
        @media screen and (max-width:600px){
            grid-template-columns:repeat(1,1fr);
        }
    }
`