import styled from "styled-components";
import size from "../config/PageSize"

export const FooterContainer = styled.section`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-size: 100% 100%;
    background-position: left bottom;
    background-repeat: no-repeat;
    width: 100%;
    height: 55vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 180px 80px 16px 80px;
    gap: 64px;

    hr {
        border: none;
        border-left: 2px solid rgb(147,68,165);
        height: 16vh;
        width: 2px;
    }

    img {
        width: 150px;
        height: auto;
    }

    @media screen and (max-width: ${size.md}) {
        display: none;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3 {
        font-size: 16px;
        color: rgb(147,68,165);
    }
    p {
        font-size: 14px;
        color: rgb(147,68,165);
    }
`;

export const FooterContactInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;

    svg {
        width: 30px;
        height: 100%;
        fill: rgb(147,68,165);
    }

    p {
        display: flex;
        align-items: center;
    }
`;

export const FooterContainerResponsive = styled.div`
    display: none;
    @media screen and (max-width: ${size.md}) {
        width: 100%;
        height: 57vh;
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(255,227,254,1) 20%, rgba(255,227,254,1) 100%);display: flex;
        display: flex;
        
    }
`;

export const FooterContentResponsive = styled.div`
    width: 100%;
    height: 55vh;
    padding: 120px 32px 0 0;
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 100% auto;

    display: flex;
    flex-direction: row;
`;

export const LeftContent = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

export const FooterLogo = styled.img`
    width: 120px;
`;

export const FooterRespSN = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
`;

export const RightContent = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const FooterRespAbout = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 4px;
    h3 {
        font: normal normal normal 16px abeezee-regular;
        color: rgb(147,68,165);
    }
    p {
        font: normal normal normal 12px abeezee-regular;
        color: rgb(147,68,165);
    }
`;

export const FooterRespAboutItem = styled.div`

`;

export const FooterRespInfo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    h3 {
        font: normal normal normal 16px abeezee-regular;
        color: rgb(147,68,165);
        margin: 0px;
        padding: 0px;
        width: auto;
        height: auto;
    }
`;

export const FooterRespInfoItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    svg {
        width: 20px;
        height: 20px;
        fill: rgb(147,68,165);

    }

    p {
        font: normal normal normal 12px abeezee-regular;
        color: rgb(147,68,165);
    }
`;


