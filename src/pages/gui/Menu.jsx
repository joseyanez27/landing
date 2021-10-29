import React from 'react'
import { HashLink } from 'react-router-hash-link'

import {
    ButtonClose,
    MenuContainer,
    MenuFullScreen,
    NavLink
} from '../../assets/styles/Menu.style'

import iconClose from '../../assets/icons/delete.svg'

function Menu({ setIsOpen, isOpen }) {

    return (
        <MenuFullScreen isOpen={isOpen}>
            <MenuContainer>
                <ButtonClose src={iconClose} onClick={() => setIsOpen(!isOpen)} />
                <hr />
                <NavLink onClick={() => setIsOpen(false)}>
                    <HashLink smooth to="#inicio">
                        Inicio
                    </HashLink>
                </NavLink>
                <hr />
                <NavLink onClick={() => setIsOpen(false)}>
                    <HashLink smooth to="#servicios">
                        Servicios
                    </HashLink>
                </NavLink>
                <hr />
                <NavLink onClick={() => setIsOpen(false)}>
                    <HashLink smooth to="#promociones">
                        Promociones
                    </HashLink>
                </NavLink>
                <hr />
                <NavLink onClick={() => setIsOpen(false)}>
                    <HashLink smooth to="#contacto">
                        Contacto
                    </HashLink>
                </NavLink>
                <hr />
            </MenuContainer>
        </MenuFullScreen>
    )
}

export default Menu
