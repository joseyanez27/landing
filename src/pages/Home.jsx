import React from 'react'

import backgroundTracing from '../assets/images/tracing-home-fix.png'
import backgroundImage from '../assets/images/img-spa.jpg'
import logoHome from '../assets/images/logo.png'

import {
    HomeContainer,
    HomeContent,
    HomeHeader,
    HomeTitles,
    HomeBody,
    BodyContent,
    HomeButton
} from '../assets/styles/Home.style'
import {
    Title,
    Slogan,
    Paragraph
} from '../assets/fonts/typesetting'


function Home() {

    return (
        <HomeContainer id='inicio'>
            <HomeContent bg={backgroundImage}>
                <HomeHeader bg={backgroundTracing}>
                    <HomeTitles>
                        <Title>Brujas Blancas</Title>
                        <Slogan>Estética</Slogan>
                    </HomeTitles>
                </HomeHeader>
            </HomeContent>
            <HomeBody>
                <img src={logoHome} alt="logo-body" />
                <BodyContent>
                    <div>
                        <Slogan>2.342 +</Slogan>
                        <Paragraph>Clientes felices</Paragraph>
                    </div>
                    <hr />
                    <div>
                        <Slogan>10.489</Slogan>
                        <Paragraph>Tratamientos<br /> aplicados</Paragraph>
                    </div>
                    <hr />
                    <div>
                        <Slogan>99.5%</Slogan>
                        <Paragraph>Efectividad en<br /> tratamientos</Paragraph>
                    </div>
                </BodyContent>
                {/* TODO: Agregar redireccion a whatsapp */}
                <HomeButton target="_blank" href="https://wa.me/56992387070">¡Contáctanos!</HomeButton>
            </HomeBody>
        </HomeContainer>
    )
}

export default Home