import React from 'react'
import { useHistory } from 'react-router-dom'

import {
    Card,
    WebpayContainer,
    WebpayContent
} from '../assets/styles/Webpay.style'
import { WebpayTitle } from '../assets/fonts/typesetting'

import backgroundTracing1 from '../assets/images/tracing-webpay1.png'
import backgroundTracing2 from '../assets/images/tracing-webpay2.png'
import logo from '../assets/images/logo.png'

function WebpayCancel() {
    const history = useHistory();

    const backPage = () => {
        history.push('/')
    }

    return (
        <WebpayContainer bg={backgroundTracing1}>
            <WebpayContent bg={backgroundTracing2}>
                <Card>
                    <img src={logo} alt='logo-img'/>
                    <WebpayTitle>La transacción fue cancelada.</WebpayTitle>
                    <input type="button" value="← Volver al sitio web" onClick={backPage} />
                </Card>
            </WebpayContent>
        </WebpayContainer>
    )
}

export default WebpayCancel
