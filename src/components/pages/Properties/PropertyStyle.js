import styled from "styled-components";

export const Property = styled.div`
    padding:9rem 0;
    background:#FFF8F7;
    .property_title{
        text-align:center;
        margin-bottom:12rem;

        h2{
            font-size:4.8rem;
            font-weight:700;
            color:#222;
        }
        p{
            font-size:1.8rem;
            color:#555;
            font-weight:400;
            margin-top:2rem;
            
        }
    }
    .cards {
        display:flex;
        .card{
            width:calc(33.3% - 15px);
            height:28rem;
            background-color:#fff;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            padding:3.9rem;
            position:relative;
            margin:0 15px;


            .circle_img{
                width:14.4rem;
                height:14.4rem;
                border-radius:50%;
                // background:pink;
                position:absolute;
                top:-7.2rem;
                left:calc(50% - 7.2rem);
                img{
                    border-radius:50%;
                }

            }


            h4{
                font-size:2.4rem;
                color:#222;
                font-weight:500;
                margin-top:5rem;
            }
            .stars{
                display:flex;
                margin:.8rem 0;
            }
            p{
                font-size:1.4rem;
                color:#555;
                font-weight:400;
                
            }
        }


        @media screen and (max-width:1200px){
            flex-wrap:wrap;
            .card{
                width:calc(50% - 30px);
                height:100%;
            }
            .card3{
                width:100%;
                margin-top:10rem;
            }
        }

        @media screen and (max-width:768px){
            flex-wrap:wrap;
            .card{
                width:100%;
               margin-top:10rem;
               height:100%;
            }
            
        }
    }
    @media screen and (max-width:576px){
        .property_title{
            h2{
                font-size:3.2rem;
            }
        }
    }
`