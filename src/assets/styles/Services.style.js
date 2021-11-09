import styled from "styled-components";
import size from "../config/PageSize"

export const ServicesContainer = styled.section`
    width: 100%;
    min-height: 55vh;
    max-height: auto;
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-repeat: no-repeat;
    background-size: 100% 90%;
    
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    flex-wrap: wrap;

    @media screen and (max-width: ${size.md}) {
        gap: 16px;
    }
`;
