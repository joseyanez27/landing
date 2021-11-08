import React from 'react'
import { useHistory } from 'react-router-dom';

import {
    WebpayContainer,
    WebpayContent,
    Card
} from '../assets/styles/Webpay.style'
import { WebpayTitle } from '../assets/fonts/typesetting';

import backgroundTracing1 from '../assets/images/tracing-webpay1.png'
import backgroundTracing2 from '../assets/images/tracing-webpay2.png'
import logo from '../assets/images/logo.png'

function WebpaySuccess({ id }) {
    const history = useHistory();

    const backPage = () => {
        history.push('/')
    }

    return (
        <WebpayContainer bg={backgroundTracing1}>
            <WebpayContent bg={backgroundTracing2}>
                <Card>
                    <img src={logo} alt='logo-img'/>
                    <WebpayTitle>¡Operación exitosa!</WebpayTitle>
                    {/*<WebpaySubtitle>N° de transacción: {id}</WebpaySubtitle>*/}
                    <input type="button" value="← Volver al sitio" onClick={backPage} />
                </Card>
            </WebpayContent>
        </WebpayContainer>
    )
}

export default WebpaySuccess
