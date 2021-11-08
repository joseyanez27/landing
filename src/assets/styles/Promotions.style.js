import styled from "styled-components";

export const PromotionsContainer = styled.section`
    width: 100%;
    min-height: 50vh;
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 64px 0 0 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PromotionContent = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    gap: 32px;
    flex-wrap: wrap;
    justify-content: center;

`;

export const PromotionTitle = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-size: 250px auto;
    background-position: center 55%;
    background-repeat: no-repeat;
    
    width: 250px;
    min-height: 150px;
    margin: 0 0 32px 0;

    h2 {
        min-height: 40px;
        text-align: center;
        font-size: 72px;
        display: flex;
        justify-content: center;
        color: rgba(147,68,165,1);
    }
`;