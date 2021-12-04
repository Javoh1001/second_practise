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
            position:relative;
        }
        .small_imgs{
            width:24rem;
            height:16rem;
            position:absolute;
            right:-2rem;
            bottom:-2rem;
        }
        .about_img1{
            width:100%;
           
        }
        .small_about_img{
            width:100%;
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
            margin-left:0;
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

