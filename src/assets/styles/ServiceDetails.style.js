import styled from "styled-components";
import size from "../config/PageSize"

export const DetailsContainer = styled.div`
    
`;

export const DetailsHeader = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-repeat: no-repeat;
    background-position: right top;
    background-size: auto 100%;
    width: 100%;
    height: auto;

    
    @media screen and (max-width: ${size.md}) {
        background-image: ${({ bg }) => bg && `url(${bg})`};
        background-repeat: no-repeat;
        background-position: right top;
        background-size: auto 82%;
        width: 100%;
        height: auto;
    }
    @media screen and (max-width: ${size.sm}) {
        background-image: ${({ bg }) => bg && `url(${bg})`};
        background-repeat: no-repeat;
        background-position: right top;
        background-size: auto 80%;
        width: 100%;
        height: auto;
    }
    
`;

export const DetailsHeaderContent = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row;

    @media screen and (max-width: ${size.md}) {
        background-image: ${({ bg }) => bg && `url(${bg})`};
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 160% 100%;
        width: 100%;
        height: 80vh;
    }
    @media screen and (max-width: ${size.sm}) {
        background-image: ${({ bg }) => bg && `url(${bg})`};
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 160% 90%;
        width: 100%;
        height: 50vh;
    }
`;

export const TitleContent = styled.div`
    width: 55%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 250px 0 0 5%;
    
    h1 {

        color: rgb(255,255,255);
    }

    @media screen and (max-width: ${size.md}) {
        width: 60%;
        height: 40vh;
        
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 200px 0 0 5%;
    }

    @media screen and (max-width: ${size.sm}) {
        width: 60%;
        height: 30vh;
        padding: 64px 0 0 5%;

        h1 {
        font-size: 40px;
        color: rgb(255,255,255);
    }
    }
`;

export const SubTitleContent = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-repeat: no-repeat;
    background-position: center 8vh;
    background-size: 15% auto;
    width: 100%;

    display: flex;
    justify-content: center;
`;

export const DetailsBody = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    
    h2 {
        font-size: 64px;
        color: rgb(147,68,165);
        
    }
`;

export const DescriptionContent = styled.div`
    width: 90%;
    padding: 32px 64px;

    p {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const PhotosContent = styled.div`
    width: 100%;
    padding: 32px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
`;

export const ButtonsContent = styled.div`
    width: 100%;
    height: 20vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
`;

export const ButtonAgenda = styled.a`
    padding: 20px 80px;
    background: rgb(147,68,165);
    color: rgb(255,255,255);
    border: none    ;

    p {
        font-size: 22px;
    }
`;

export const ButtonWhatsapp = styled.a`
    width: 250px;
    padding: 4px 20px;
    background: rgb(69,183,31);
    color: rgb(255,255,255);
    border: none;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;

    svg {
        width: 20px;
        height: 20px;
    }

    p {
        font-size: 12px;
    }
`;