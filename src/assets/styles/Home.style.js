import styled from "styled-components"
import size from "../config/PageSize"

export const HomeContainer = styled.section`
    width: 100%;
`;

export const HomeContent = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 80% auto;
    width: 100%;
    height: 60vw;

    @media screen and (max-width: ${size.lg}) {
        background-size: 100% auto;
        height: 70vw;
    }
    @media screen and (max-width: ${size.md}) {
        background-size: 120% auto;
        height: 90vw;
    }
`;

export const HomeHeader = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;


    @media screen and (max-width: ${size.lg}) {
        background-size: 120% auto;
    }
    @media screen and (max-width: ${size.md}) {
        background-size: 150% auto;
    }
`;

export const HomeTitles = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16vw 0 0 0;

    h1 { //Título
        color: #FFF;
        width: 90%;
        font-weight: bold;
        font-size: 8vw;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    h3 { // Slogan
        color: #FFF;
    }

    @media screen and (max-width: ${size.lg}) {
        width: 55%;
        margin: 2px 0 0 0;
        h1 { font: normal normal normal 8vw patrizia; font-weight: bold; text-align: center; }
        h3 { font: normal normal normal 3vw monserrat; font-weight: bold; }
    }
    @media screen and (max-width: ${size.md}) {
        width: 70%;
        margin: 12vh 0;
        padding: 8vw 0 0 0;
        h1 { font: normal normal normal 10vw patrizia; font-weight: bold; text-align: center; }
        h3 { font: normal normal normal 3vw monserrat; font-weight: bold; }
    }

`;

export const HomeBody = styled.div`
    width: 100%;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 400px;
    }

`;

export const BodyContent = styled.div`
    width: 45%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 32px 0px 32px 0px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    h3 {
        margin: 10px auto;
        color: #9344a5;
        font-weight: bold;
    }
    
    p {
        text-align: center;
        font-weight: bold;
    }

    hr {
        border: none;
        border-left: 2px solid rgb(184,184,184);
        height: 9vw;
        width: 2px;
    }

    @media screen and (max-width: ${size.md}) {
        width: 90%;
        h3 { font: normal normal normal 6vw monserrat; }
        p { font: normal normal normal 3vw monserrat; }
        hr { height: 22vw; }
    }

`;

export const Button = styled.button`
    border: none;
    border-radius: 0;
    margin: 10px 16px;
    padding: 10px;
    font: normal normal normal 22px/30px monserrat;
    background-color: rgb(147,68,165);
    color: #FFF;
    cursor: pointer;

    :hover {
        background-color: rgb(223,32,211);
    }

`;

export const HomeButton = styled.a`
    border: none;
    border-radius: 0;
    margin: 64px 16px;
    padding: 20px 80px;
    font: normal normal normal 22px/30px monserrat;
    background: rgb(147,68,165);
    color: rgb(255,255,255);
    border: none;
    cursor: pointer;

    :hover {
        background-color: rgb(223,32,211);
    }

    p {
        font-size: 22px;
    }

    @media screen and (max-width: ${size.md}) { 
        padding: 20px 60px;
    }
`;