import React from 'react'
import { ReactSVG } from 'react-svg'

import {
    FooterContainer,
    FooterContent,
    FooterContactInfo,
    FooterContainerResponsive,
    FooterContentResponsive,
    LeftContent,
    FooterLogo,
    FooterRespSN,
    RightContent,
    FooterRespAbout,
    FooterRespInfo,
    FooterRespInfoItem
} from '../../assets/styles/Footer.style'
import { Paragraph, Slogan } from '../../assets/fonts/typesetting'

import footerTracing from '../../assets/images/tracing-footer.png'
import logo from '../../assets/images/logo.png'
import iconPhone from '../../assets/icons/phone.svg'
import iconEmail from '../../assets/icons/email.svg'
import iconLocation from '../../assets/icons/location.svg'
import iconFacebook from '../../assets/icons/facebook.svg'
import iconInstagram from '../../assets/icons/instagram.svg'

function Footer() {
    const facebookURL = 'https://www.facebook.com/esteticaandaluz/';
    const instagramURL = 'https://www.instagram.com/esteticaandaluz/?hl=es'

    return (
        <>
            <FooterContainer bg={footerTracing}>
                <FooterContent>
                    <img src={logo} alt="logo"/>
                </FooterContent>
                <hr />
                <FooterContent>
                    <Slogan>Acerca de nosotros</Slogan>
                    <Paragraph>Somos un centro de estética integral con profesionales comprometidos en brindar al paciente el mejor resultado en tratamientos faciales y corporales con equipos de tecnología avanzada y un grato ambiente, basado en el respeto, seguridad y atención de calidad.</Paragraph>
                </FooterContent>
                <hr />
                <FooterContent>
                    <FooterContactInfo>
                        <ReactSVG src={iconPhone} />
                        <Paragraph>+56987654321</Paragraph>
                    </FooterContactInfo>
                    <FooterContactInfo>
                        <ReactSVG src={iconEmail} />
                        <Paragraph>contacto@esteticaandaluz.cl</Paragraph>
                    </FooterContactInfo>
                    <FooterContactInfo>
                        <ReactSVG src={iconLocation} />
                        <Paragraph>Antonio Bellet 77, Oficina 601. Providencia. Cerca del Metro Pedro de Valdivia.</Paragraph>
                    </FooterContactInfo>
                </FooterContent>
                <hr />
                <FooterContent>
                    <a href={facebookURL}><ReactSVG src={iconFacebook} /></a>
                    <a href={instagramURL}><ReactSVG src={iconInstagram} /></a>
                </FooterContent>
            </FooterContainer>
            <FooterContainerResponsive>
                <FooterContentResponsive bg={footerTracing}>
                    <LeftContent>
                        <FooterLogo src={logo} />
                        <FooterRespSN>
                            <a href={facebookURL}><ReactSVG src={iconFacebook} /></a>
                            <a href={instagramURL}><ReactSVG src={iconInstagram} /></a>
                        </FooterRespSN>
                    </LeftContent>
                    <RightContent>
                        <FooterRespAbout>
                            <Slogan>Sobre nosotros</Slogan>
                            <Paragraph>Somos un centro de estética integral con profesionales comprometidos en brindar al cliente el mejor resultado en tratamientos faciales y corporales con equipos de tecnología avanzada y un grato ambiente, basado en el respeto, seguridad y atención de calidad.</Paragraph>
                        </FooterRespAbout>
                        <FooterRespInfo>
                            <Slogan>Contacto</Slogan>
                            <FooterRespInfoItem>
                                <ReactSVG src={iconPhone} alt="phone"/>
                                <Paragraph>+56 9 7958 7314</Paragraph>
                            </FooterRespInfoItem>
                            <FooterRespInfoItem>
                                <ReactSVG src={iconEmail} />
                                <Paragraph>contacto@esteticaandaluz.cl</Paragraph>
                            </FooterRespInfoItem>
                            <FooterRespInfoItem>
                                <ReactSVG src={iconLocation} />
                                <Paragraph>Antonio Bellet 77, Oficina 601. Providencia. Cerca del metro Pedro de Valdivia.</Paragraph>
                            </FooterRespInfoItem>
                        </FooterRespInfo>
                    </RightContent>
                </FooterContentResponsive>
            </FooterContainerResponsive>
        </>
    )
}

export default Footer
