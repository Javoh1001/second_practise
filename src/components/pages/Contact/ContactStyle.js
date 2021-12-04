import styled from "styled-components";

export const ContactSection = styled.div`
    background:#EFEFEF;

    @media screen and (max-width:600px){
        padding-top:1rem;
    }
`

export const ContactContent = styled.div`
    .form{
        width:100%;
        height:25rem;
        background:#19BCE4;
        border-radius:2.4rem;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        padding:4rem;
        position:relative;
        top:10rem;
        h3{
            color:#fff;
            font-size:4rem;
            font-weight:700;
            margin-bottom:4rem;
        }
        form{
            width:100%;
        }
       .input{
           width:61.5%;;
            position:relative;
            margin:0 auto;
            input{
                width:100%;
                height:6.4rem;
                display:block;
                border:none;
                outline:none;
                padding:0 2.4rem;
                font-size:1.4rem;
                color:#555;
                font-weight:400;
                
            }
            button{
                position:absolute;
                right:.8rem;
                top:.8rem;
                z-index:10;
                height:4.8rem;
                border:none;
                width:12rem;
                background:#19BCE4;
                font-size:1.8rem;
                font-weight:400;
                border-radius:.6rem;
            }

            @media screen and (max-width:600px){
                button{
                    position:relative;
                    height:4rem;
                    border:none;
                    left:0;
                    top:2rem;
                    width:10rem;
                    background:#fff;
                    font-size:1.6rem;
                    font-weight:400;
                    border-radius:0;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
                
            }
       }


        @media screen and (max-width:1200px){
            h3{
                font-size:3.6rem;
            }
        }

        @media screen and (max-width:768px){
            h3{
                font-size:3.2rem;
                text-align:center;
            }
            
            .input{
                width:100%;
            }
        }
        @media screen and (max-width:600px){
            h3{
                font-size:2.8rem;
                text-align:center;
            }
           
            
        }
    }
    @media screen and (max-width:600px){
        .form{
            border-radius:0;
            height:100%;
        }
        
    }
`

export const Footer = styled.div`
    background-color:#F8FDFE;
    padding:12rem 0;

    .footer_content{
        margin-top:3rem;
        width:100%;
        display:flex;
        .footer1{
            width:35%;
            ul{
                display:flex;
                align-items:center;
                list-style:none;
                li{
                    font-size:1.8rem;
                    span{
                        margin-left:1.2rem;
                    }
                }
            }
            p{
                font-size:1.8rem;
                line-height:2.7rem;
                margin-top:2.6rem;
                padding-right:2rem;
            }
        }
        .footer_logo{
            width:15%;
            h4{
                font-size:2.4rem;
                font-weight:500;
                color:#222;
                margin-bottom:2.4rem;
            }
            ul{
                list-style:none;
                li{
                    font-size:1.8rem;
                    line-height:2.7rem;
                    a{
                        text-decoration:none;
                        color:#555;
                        font-weight:normal;
                    }
                }
            }
        }
        .footer2{
            width:20%;
        }

        @media screen and (max-width:1200px){
            .footer_logo{
                ul{
                    li{
                        font-size:1.6rem;
                    }
                }
            }
            .footer1{
                p{
                    font-size:1.6rem;
                }
            }
        }


       
    }
    @media screen and (max-width:768px){
       .footer_content{
           flex-wrap:wrap;
           justify-content:center;
        .footer1{
            width:50%;
        }
        .footer_logo{
            width:25%;
            margin-top:3rem;
            
        }

       }
    }

    @media screen and (max-width:576px){
        .footer_content{
            flex-wrap:wrap;
            justify-content:center;
         .footer1{
             width:100%;
         }
         .footer_logo{
             width:100%;
             margin-top:3rem;
             
         }
 
        }
     }
   
   
`