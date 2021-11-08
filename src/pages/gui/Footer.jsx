import React, { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import axios from 'axios'

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
import iconSchudle from '../../assets/icons/clock.svg'
import iconFacebook from '../../assets/icons/facebook.svg'
import iconInstagram from '../../assets/icons/instagram.svg'

import { facebook, instagram } from '../../assets/common/external-links'

function Footer() {
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [schudle, setSchudle] = useState()
    const [aboutUs, setAboutUs] = useState()
    const [facebook, setFacebook] = useState()
    const [instagram, setInstagram] = useState()

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://apibrujasblancas.venatici.cl/contact/1'
        };

        axios(config)
            .then(function (response) {
                setPhone('+56 ' + response.data.phone)
                setEmail(response.data.email)
                setSchudle(response.data.publicAt)
                setFacebook(response.data.facebook)
                setInstagram(response.data.instagram)

            })
            .catch(function (error) {
                console.log(error);
            });
        setAboutUs('[FALTA INFORMACION DEL EMPRENDIMIENTO]')
    }, [])

    return (
        <>
            <FooterContainer bg={footerTracing}>
                <FooterContent>
                    <img src={logo} alt="logo" />
                </FooterContent>
                <hr />
                <FooterContent>
                    <Slogan>Acerca de nosotros</Slogan>
                    <Paragraph>{aboutUs}</Paragraph>
                </FooterContent>
                <hr />
                <FooterContent>
                    <FooterContactInfo>
                        <ReactSVG src={iconPhone} />
                        <Paragraph>{phone}</Paragraph>
                    </FooterContactInfo>
                    <FooterContactInfo>
                        <ReactSVG src={iconEmail} />
                        <Paragraph>{email}</Paragraph>
                    </FooterContactInfo>
                    <FooterContactInfo>
                        <ReactSVG src={iconSchudle} />
                        <Paragraph>{ schudle }</Paragraph>
                    </FooterContactInfo>
                </FooterContent>
                <hr />
                <FooterContent>
                    <a href={facebook}><ReactSVG src={iconFacebook} /></a>
                    <a href={instagram}><ReactSVG src={iconInstagram} /></a>
                </FooterContent>
            </FooterContainer>
            {/* =============================== Footer responsivo */}
            <FooterContainerResponsive>
                <FooterContentResponsive bg={footerTracing}>
                    <LeftContent>
                        <FooterLogo src={logo} />
                        <FooterRespSN>
                            <a href={facebook}><ReactSVG src={iconFacebook} /></a>
                            <a href={instagram}><ReactSVG src={iconInstagram} /></a>
                        </FooterRespSN>
                    </LeftContent>
                    <RightContent>
                        <FooterRespAbout>
                            <Slogan>Sobre nosotros</Slogan>
                            <Paragraph>{ aboutUs }</Paragraph>
                        </FooterRespAbout>
                        <FooterRespInfo>
                            <Slogan>Contacto</Slogan>
                            <FooterRespInfoItem>
                                <ReactSVG src={iconPhone} alt="phone" />
                                <Paragraph>{phone}</Paragraph>
                            </FooterRespInfoItem>
                            <FooterRespInfoItem>
                                <ReactSVG src={iconEmail} />
                                <Paragraph>{email}</Paragraph>
                            </FooterRespInfoItem>
                            <FooterRespInfoItem>
                                <ReactSVG src={iconSchudle} />
                                <Paragraph>{schudle}</Paragraph>
                            </FooterRespInfoItem>
                        </FooterRespInfo>
                    </RightContent>
                </FooterContentResponsive>
            </FooterContainerResponsive>
        </>
    )
}

export default Footer
