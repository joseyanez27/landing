import { ReactSVG } from "react-svg";
import styled from "styled-components";
import size from "../config/PageSize";

export const MenuFullScreen = styled.div`
    display: flex;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    width: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    position: absolute;
    z-index: 1500;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    background-color: rgba(0, 0, 0, 0.4);
    transition: opacity 0.5s ease-out;

    div{
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")}
    }

    
    @media screen and (min-width: ${size.md}) {
      display: none;
    }
`;

export const MenuContainer = styled.div`
    width: 80%;
    min-height: 20%;
    margin: 22px 22px;
    padding: 16px;
    height: 57vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 30px 30px 30px 30px;
    gap: 16px;
    
    hr {
      border: none;
      border-top: 2px solid rgba(69,183,31,0.1);
      width: 100%;
    }


`;

export const ButtonClose = styled(ReactSVG)`
    cursor: pointer;
    width: auto;
    
    svg {
      fill: #45b71f;
      border-radius: 30px;
      max-height: 30px;
      max-width: 30px;
    }
`;

export const NavLink = styled.a`
    display: flex;
    justify-content: center;
    width: auto;
    height: auto;
    padding: 8px 0px;
    
    p{
        color: #FFF;
    }

    * {
      color: #45b71f;
      font: normal normal normal 20px monserrat;
    }

    *:hover {
      color: #9344a5;
    }
`;