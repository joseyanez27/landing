import styled from "styled-components";

export const PromotionItemContainer = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const PromotionItemContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    flex-wrap: wrap;
`;

export const ImagePromo = styled.img`
    width: 350px;
    height: 350px;
    cursor: pointer;
`;


// ==================================== Modal Styles
export const BuyPromoContainer = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

export const BuyPromoContent = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BuyPromoContentHeader = styled.div`
    width: 300px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
export const BuyPromoContentBody = styled.form`
    width: 300px;
    padding: 16px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const BuyPromoContentCard = styled.div`
    background: rgba(255,255,255,.7);
    display: flex;
    flex-direction: row;
    padding: 16px;
    border-radius: 15px;
`;

export const BuyPromoMessage = styled.span`
    color: red;
    font-size: 12px;
`;

export const BuyPromoGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`;

export const BuyPromoSubtitle = styled.h6`
    width: 100%;
    text-align: left;
    margin: 0 0 4px 0;
`;

export const BuyPromoInput = styled.input`
    width: 100%;
    padding: 2px;
    text-align: left;
    margin: 0 0 10px 0;
`;

export const BuyPromoImage = styled.img`
    width: 300px;
    box-shadow: 0 0 5px rgb(147,69,165,.5);
`;

export const BuyPromoHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 0 16px 0;
    border-bottom: 2px solid rgba(108,117,125,.5);
`;

export const BuyPromoDivision = styled.div`
    width: 100%;
    padding: 16px 0;
    border-bottom: 2px solid rgba(108,117,125,.5);
    border-top: 2px solid rgba(108,117,125,.5);

    display: flex;
    justify-content: center;
`;

export const BuyPromoFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    

    button {
        background: none;
        padding: 6px;
        border-radius: 3px;
    }

`;

export const BuyPromoBtnContinue = styled.button`
    border: 2px solid rgb(61,139,253);
    color: rgb(61,139,253);

    :hover {
        background: rgb(61,139,253);
        color: #FFF;
        transition: .3;
    }
`;

export const BuyPromoBtnCancel = styled.button`
    border: 2px solid rgb(108,117,125);
    color: rgb(108,117,125);

    :hover {
        background: rgb(108,117,125);
        color: #FFF;
        transition: .3;
    }
`;