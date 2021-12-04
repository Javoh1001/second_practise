import styled from 'styled-components';


export const SerSection = styled.div`
    
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
            padding-left:3rem;
            
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


                    @media screen and (max-width:576px){
                        padding-left:0;
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
                    margin-left:0;
                    margin-right:0;
                }
            }

            @media screen and (max-width:576px){
                .right{
                    width:100%;
                    flex-direction:column;
                    text-align:center;
                    h4{
                        margin:0;
                        margin-top:2rem;
                    }
                }
            }

            
            @media screen and (max-width:576px){
                padding-left:0;
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

    @media screen and (max-width:576px){
        padding:4rem 0 10rem 0;
        h1{
            font-size:3.2rem;
            text-align:center;
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
        grid-gap:2rem;

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

    @media screen and (max-width:576px){
        .title{
            h2{
                font-size:3.2rem;
            }
        }
    }
`

export const ChooseUs = styled.div`
    background-color:#F8FDFE;
    // padding-bottom:12rem;
`
export const ChooseContent = styled.div`
    display:flex;
    // align-items:center;
    .choose{
        width:50%;
    }
    .choose_left{
        padding-top:12rem;
        h2{
            font-size:4.8rem;
            color:#222;
            font-weight:700;
            margin-bottom:2rem;
        }
        p{
            font-size:1.8rem;
            font-wegiht:normal;
            color:#555;
            line-height:3rem;
        }


        // media 

        @media screen and (max-width:1300px){
            h2{
                font-size:4.4rem;
            }
            p{
                font-size:1.7rem;
                line-height:2rem;
            }
        }

        @media screen and (max-width:576px){
            h2{
                font-size:3.2rem;
            }
        }
    }
    .choose_right{
        img{
            width:100%;
        }

        // media 

        @media screen and (max-width:1300px){
            img{
                padding-top:3rem;
            }
        }
    }

    // media 

    @media screen and (max-width:1100px){
        flex-wrap:wrap;

        .choose{
            width:100%;
        }

    }
`
