import styled from 'styled-components'

export const WebpayContainer = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-repeat: no-repeat;
    background-position: left top;
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;

    img {
        width: 130px;
    }
`;

export const WebpayContent = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-repeat: no-repeat;
    background-position: left top;
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        border: none;
        background: none;
        cursor: pointer;
        font-weight: bold;

        :hover {
            color: green;
        }
    }
`;

export const Card = styled.div`
    width: 50%;
    height: 40vh;
    background: rgb(255,255,255,.7);
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

`;

