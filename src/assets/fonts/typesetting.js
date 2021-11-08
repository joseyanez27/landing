import styled from "styled-components";
import size from "../config/PageSize";

export const Title = styled.h1`
    font: normal normal normal 115px patrizia;
    @media screen and (max-width: ${size.md}) {
        font: normal normal normal 100px patrizia;
    }
`;

export const SubTitle = styled.h2`
    font: normal normal normal 15vw patrizia;
`;

export const Slogan = styled.h3`
    font: normal normal normal 2.5vw monserrat;
`;

export const Paragraph = styled.p`
    font: normal normal normal 1vw monserrat;
`;

// ===================================================== Dashboard Cards
export const CardTitle = styled.h3`
    font: normal normal normal 22px monserrat;
    font-weight: bold;
    color: rgb(147,69,165);
`;
export const CardSubTitle = styled.h5`
    font: normal normal normal 14px monserrat;
    font-weight: bold;
    color: rgb(147,69,165);
`;

export const CardParagraph = styled.p`
    font: normal normal normal 12px monserrat;
    color: rgb(0,0,0);
`;

export const CardData = styled.span`
    font: normal normal normal 12px monserrat;
    color: rgb(0,0,0);
`;

// ========================================================== Modals

export const ModalTitle = styled.h3`
    font: normal normal normal 22px monserrat;
    font-weight: bold;
    color: rgb(147,69,165);
`;

export const ModalSubTitle = styled.h5`
    font: normal normal normal 14px monserrat;
    font-weight: bold;
    color: rgb(147,69,165);

`;

export const ModalParagraph = styled.p`
    font: normal normal normal 12px monserrat;
    color: rgb(0,0,0);
`;

export const ModalData = styled.span`
    font: normal normal normal 12px monserrat;
    color: rgb(0,0,0);
`;

// =========================================================== Webpay
export const WebpayTitle = styled.h1`
    font: normal normal normal 32px monserrat;
    font-weight: bold;
    color: rgb(147,69,165);
`;
export const WebpaySubtitle = styled.h4`
    font: normal normal normal 16px monserrat;
    font-weight: bold;
    color: rgb(147,69,165);
`;
export const WebpayPharagraph = styled.p`
    font: normal normal normal 12px monserrat;
    color: rgb(0,0,0);
`;
export const WebpayMessage = styled.p`
    font: normal normal normal 12px monserrat;
    color: red;
`;

// ============================================================ Button
export const BtnWhatsapp = styled.p`
    font: normal normal normal 40px monserrat;
    color: #FFFFFF;
    font-weight: bold;
`;