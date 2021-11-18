import styled from "styled-components";
import size from "../config/PageSize"

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    z-index: 5000;
`;

export const NavContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    
    
    @media screen and (max-width: ${size.md}) {
        display: none;

    }
`;

export const NavLogo = styled.img`
    width: 150px;
    margin: 16px;
    fill: #FFF;

    @media screen and (max-width: ${size.md}) {
        width: 100px;
    }
`;

export const NavItems = styled.div`
    display: flex;
    width: 40%;
    height: 150px;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    
`;

export const NavLink = styled.a`
    display: flex;
    width: auto;
    height: auto;

    p{
        color: #FFF;
        font: normal normal normal 16px monserrat;
    }
`;

export const SocialNetworks = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 32px;
    gap: 16px;

    @media screen and (max-width: ${size.md}) {
        display: none;
    }
`;

// ---------------------------------------------- Menu Responsivo
export const MenuContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    
    @media screen and (min-width: ${size.md}) {
        display: none;
    }
`;

export const NavMenu = styled.div`
    height: 40px;
    width: 40px;
    cursor: pointer;

    svg {
        fill: #FFF;
        height: auto;
        width: 60px;
        padding: 20px 0 0 20px;
    }
`;

export const MenuSocialNetworks = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 16px 0 0;
    gap: 6px;

    
`;