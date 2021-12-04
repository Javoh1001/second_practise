import styled from 'styled-components';
import HomeBg from './HomeImages/image.jpg';
import {Link} from 'react-router-dom';

export const HomeSection = styled.div`
    background:url(${HomeBg});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    height:70rem;
    width:100%;
    position:relative;
    z-index:100;

    &::before{
        position:absolute;
        content:'';
        width:100%;
        height:100%;
        background:rgba(0,0,0,.5);
        top:0;
        left:0;
        z-index:-1;
    }
`
export const HomeContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:70vh;
    flex-direction:column;
    width:100%;
    
    h1{
        font-size:6.4rem;
        font-weight:700;
        color:#fff;
        text-align:center;
        margin-bottom:2.4rem;
    }
    .content_text{
        font-size:2rem;
        font-weight:normal;
        color:#fff;
        text-align:center;
    }

   

    @media screen and (max-width:1200px){
        h1{
            font-size:5.4rem;
            font-weight:600;
        }
        .content_text{
            font-size:1.8rem;
        }
    }

    @media screen and (max-width:800px){
        h1{
            font-size:5rem;
            font-weight:600;
            margin-top:6rem;
        }
        .content_text{
            font-size:1.6rem;
            margin-bottom:3rem;
        }
    }

    @media screen and (max-width:800px){
        h1{
            font-size:3.5rem;
            font-weight:600;
            margin-top:20rem;
        }
        .content_text{
            font-size:1.6rem;
            margin-bottom:3rem;
            text-align:center;
        }
    }
`   

export const HomeTable = styled.div`
    padding:0 2.4rem;
    width:100%;
    height:10rem;
    background-color:#fff;
    margin-top:9rem;
    display:flex;
    // justify-content:space-around;
    align-items:center;
    // flex-wrap:wrap;

    
    .home_location{
        width:25%;
        height:7rem;
        border: 1px solid #19BCE4;

        .border{
            
            // padding:1rem 2rem;
        }
        span{
            font-size:1.4rem;
            color:#555555;
            font-weight:normal;
        }
        p{
            font-size:2rem;
            font-weight:500;
            padding-top:1rem;
            
            @media screen and (max-width:1200px){
                font-size:1.6rem;
            }
        }
    }
    .location{
        padding:1rem 2rem;
    }
    .proporties{
        margin-left:2rem;
        padding:1rem 2rem;
    }
    .price{
        margin-left:3rem;
        padding:1rem 2rem;
    }
    .search{
        margin-left:4rem;
    }


    @media screen and (max-width:800px){
        width:100%;
        flex-wrap:wrap;
        padding:5rem;
        height:100%;
        margin:0 auto;
        .home_location{
            width:calc((100% / 2) - 30px );
            margin-left:0;
            margin:15px;
        }
    }
    @media screen and (max-width:576px){
        width:100%;
        flex-wrap:wrap;
        padding:5rem;
        height:100%;
        margin:0 auto;
        padding:1rem;
        .home_location{
            width:100%;
        }
    }
    
`
export const TableLink = styled(Link)`
    color:#17C2EC;
`
export const Button = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    border:none;
    background:#19BCE4;
    font-size:2rem;
    color:#fff;
    font-weight:500;
    width:100%;
    height:7rem;
    cursor:pointer;

`