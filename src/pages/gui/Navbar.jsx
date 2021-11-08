import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { ReactSVG } from 'react-svg'
import axios from 'axios'

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

import iconFacebook from '../../assets/icons/facebook.svg'
import iconInstagram from '../../assets/icons/instagram.svg'
import logoWhite from '../../assets/images/logo-white-fix.png'
import iconMenu from '../../assets/icons/menu.svg'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [facebook, setFacebook] = useState()
    const [instagram, setInstagram] = useState()

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://apibrujasblancas.venatici.cl/contact/1'
        };

        axios(config)
            .then(function (response) {
                setFacebook(response.data.facebook)
                setInstagram(response.data.instagram)

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

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
                <a href={facebook}><ReactSVG src={iconFacebook} /></a>
                <a href={instagram}><ReactSVG src={iconInstagram} /></a>
            </SocialNetworks>

            <MenuContent>
                <NavMenu onClick={() => setIsOpen(true)}>
                    <ReactSVG src={iconMenu} />
                </NavMenu>
                <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
                <NavLogo src={logoWhite} alt="logo" />
                <MenuSocialNetworks>
                    <a href={facebook}><ReactSVG src={iconFacebook} /></a>
                    <a href={instagram}><ReactSVG src={iconInstagram} /></a>
                </MenuSocialNetworks>

            </MenuContent>
        </Nav>
    )
}

export default Navbar
