import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { ReactSVG } from 'react-svg'

import {
    Nav,
    NavContent,
    NavLogo,
    NavLink,
    NavItems,
    SocialNetworks,
    MenuContent,
    NavMenu,
    MenuSocialNetworks
} from '../../assets/styles/Navbar.style'
import { Paragraph } from '../../assets/fonts/typesetting'
import Menu from './Menu'

import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import logoWhite from '../../assets/images/logo-white.png'
import iconMenu from '../../assets/icons/menu.svg'

function Navbar() {
    const facebookURL = 'https://www.facebook.com/esteticaandaluz/';
    const instagramURL = 'https://www.instagram.com/esteticaandaluz/?hl=es'

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <NavContent>
                <NavLogo src={logoWhite} alt="Logo" />

                <NavItems>
                    <NavLink>
                        <HashLink smooth to="/#inicio">
                            <Paragraph>Inicio</Paragraph>
                        </HashLink>
                    </NavLink>
                    <NavLink>
                        <HashLink smooth to="/#servicios">
                            <Paragraph>Servicios</Paragraph>
                        </HashLink>
                    </NavLink>
                    <NavLink>
                        <HashLink smooth to="/#promociones">
                            <Paragraph>Promociones</Paragraph>
                        </HashLink>
                    </NavLink>
                    <NavLink>
                        <HashLink smooth to="/#contacto">
                            <Paragraph>Contacto</Paragraph>
                        </HashLink>
                    </NavLink>
                </NavItems>
            </NavContent>
            <SocialNetworks>
                <a href={facebookURL}><ReactSVG src={facebook} /></a>
                <a href={instagramURL}><ReactSVG src={instagram} /></a>
            </SocialNetworks>

            <MenuContent>
                <NavMenu onClick={() => setIsOpen(true)}>
                    <ReactSVG src={iconMenu} />
                </NavMenu>
                <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
                <NavLogo src={logoWhite} alt="logo" />
                <MenuSocialNetworks>
                    <a href={facebookURL}><ReactSVG src={facebook} /></a>
                    <a href={instagramURL}><ReactSVG src={instagram} /></a>
                </MenuSocialNetworks>

            </MenuContent>
        </Nav>
    )
}

export default Navbar
