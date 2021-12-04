import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Rubik', sans-serif;
        // flex-flow:row wrap;
        // transition:all .4s linear;
    }
    html{
        font-size:10px;
        overflow-x:hidden;
        scroll-behavio:smooth;
    }
`;

export const Container = styled.div`
    z-index:1;
    width:100%;
    max-width:1440px;
    margin:0 auto;
    padding-right:135px;
    padding-left:135px;

    @media screen and (max-width:991px){
        padding-right:30px;
        padding-left:30px;
    }
`;

export const Button = styled.button`
    width:17rem;
    height:5.6rem;
    background-color:#19BCE4;
    border-radius:.6rem;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#fff;
    font-weight:400;
    font-size:1.8rem;
    margin-top:5.6rem;
`



export default GlobalStyle;