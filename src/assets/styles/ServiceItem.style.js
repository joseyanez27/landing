import styled from "styled-components";
import size from "../config/PageSize"

export const ServiceItemContainer = styled.div`
    width: 320px;
    height: 320px;
    margin: 0px 0px 150px 0px;

    display: flex;
    gap: 16px;

    @media screen and (max-width: ${size.sm}) {
        margin: 0px 0px 120px 0px;
    }
`;

export const ServiceContent = styled.div`
    background: rgba(255,255,255,1);
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-size: auto 320px;
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow: 0px 0px 5px rgba(151, 151, 151, 1);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: ${size.sm}) {
        width: 100%;
    }
`;

export const ServiceCard = styled.div`
    width: 280px;
    height: 250px;
    box-shadow: 0px 0px 5px rgba(151, 151, 151, 1);
    background: #FFF;
    padding: 16px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: relative;
    bottom: -200px;

    @media screen and (max-width: ${size.sm}) {
        bottom: -170px;
        width: 280px;
        height: 200px;
        h2 {
            font-size: 64px;
        }
    }
`;

export const ItemContent = styled.div`
    height: 100%;
    padding: 8px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
        min-height: 40px;
        text-align: center;
        vertical-align: middle;
        font-size: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(147,68,165);
    }
    p {
        min-height: 50px;
        text-align: center;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        //white-space: nowrap;
        //text-overflow: ellipsis;
        //overflow: hidden;
    }

    @media screen and (max-width: ${size.sm}) {
        bottom: -100px;
        width: 160px;
        height: 100%;
        h2 {font: normal normal normal 32px patrizia;}
        p {font: normal normal normal 12px monserrat;}
    }
`;

export const ItemHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ItemBody = styled.div`

`;

export const ButtonService = styled.a`
    width: 100%;
    border: none;
    border-radius: 0;
    padding: 10px;
    text-align: center;
    font: normal normal normal 20px/22px monserrat;
    background-color: rgb(69,183,31);
    color: #FFF;
    cursor: pointer;
    :hover{
        background-color: rgba(223,32,211,1);
    }
`;