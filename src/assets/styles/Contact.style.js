import styled from 'styled-components'
import size from '../config/PageSize'

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ContactTitle = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-size: 250px auto;
    background-position: center bottom;
    background-repeat: no-repeat;
    width: 250px;
    height: 100px;
    margin: 64px 0 0 0;

    display: flex;
    align-self: center;
    text-align: center;

    h2 {
        width: 100%;
        min-height: 40px;
        font-size: 72px;
        display: flex;
        justify-content: center;
        color: rgba(147,68,165,1);
    }
`;

export const ContactContent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 64px 64px;
    
    @media screen and (max-width: ${size.sm}) {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 1px;

        div {
            width: 100%;
        }

        form {
            width: 100%;

        }
    }
`;

// ------------------------------------- Informacion de contacto
export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 32px 0px;
    gap: 16px;

    @media screen and (max-width: ${size.sm}) {
        display: flex;
        gap: 64px;
    }
`;

export const InfoContent = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: ${size.sm}) {
        padding: 0 8px;
    }
    
`;

export const InfoA = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 16px;

    @media screen and (max-width: ${size.sm}) {
        display: flex;
        gap: 16px;
    }
`;

export const InfoB = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 16px;
`;

export const ContactText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    p {font: normal normal normal 18px abeezee-regular;}

    @media screen and (max-width: ${size.md}) {
        height: 50px;
        p {font: normal normal normal 13px abeezee-regular;}
    }
`;

export const ContactPhone = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 8px;
    fill: #9344a5;

    svg {
        width: 30px;
        height: 30px;
    }

    @media screen and (max-width: ${size.sm}) {
        svg { width: 20px; height: 20px; }
    }
`;

export const ContactEmail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 8px;
    fill: #9344a5;

    svg {
        width: 30px;
        height: 30px;
    }

    @media screen and (max-width: ${size.sm}) {
        svg { width: 20px; height: 20px; }
    }
`;

export const ContactSchedule = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 8px;
    fill: #9344a5;

    svg {
        width: 30px;
        height: 30px;
    }

    @media screen and (max-width: ${size.sm}) {
        svg { width: 20px; height: 20px; }
    }
`;

export const ContactLocation = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 8px;
    fill: #9344a5;

    svg {
        width: 30px;
        height: 30px;
    }

    @media screen and (max-width: ${size.sm}) {
        svg { width: 20px; height: 20px; }
        p {width: 100%;}
    }
`;

export const InfoMap = styled.div`
    display: flex;
    width: 100%;
    @media screen and (max-width: ${size.sm}) {
        padding: 0 8px;
    }
`;

// ------------------------------------- Formulario de contacto
export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 32px;
    gap: 16px;
`;

export const Field = styled.div`
    width: 100%;

    input {
        width: 100%;
    
    }

    textarea {
        width: 100%;
        height: 248px;
        resize: none;
        font-size: 16px;
    }

    p {
        font-size: 16px;
    }
`;

export const ButtonsContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 16px;

    @media screen and (max-width: ${size.md}) {
        justify-content: space-between;
    }
`;

export const ButtonWhatsapp = styled.a`
    width: 160px;
    border: none;
    border-radius: 0;
    padding: 10px 16px 10px 10px;
    font: normal normal normal 16px abeezee-regular;
    background-color: rgb(69,183,31);
    color: #FFF;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;

    :hover {
        background-color: #4DCC23;
    }

    svg {
        width: 20px;
        fill: #FFF;
    }

    @media screen and (max-width: ${size.md}) {
        width: 60%;
        padding: 10px 30px 10px 10px;
    }
`;

export const ButtonSend = styled.button`
    width: 128px;
    border: none;
    border-radius: 0;
    padding: 10px;
    font: normal normal normal 16px abeezee-regular;
    background-color: rgb(69,183,31);
    color: #FFF;
    cursor: pointer;

    :hover {
        background-color: rgb(223,32,211);
    }

    @media screen and (max-width: ${size.md}) {
        width: 40%;
    }
`;
