import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useHistory } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateRUT } from 'validar-rut'



import {
    BuyPromoContainer,
    BuyPromoContent,
    BuyPromoDivision,
    BuyPromoGroup,
    BuyPromoInput,
    BuyPromoMessage,
    BuyPromoSubtitle,
    BuyPromoBtnContinue,
    BuyPromoImage,
    BuyPromoFooter,
    BuyPromoBtnCancel,
    BuyPromoHeader,
    BuyPromoCard,
    BuyPromoContentHeader,
    BuyPromoContentBody,
    BuyPromoContentCard
} from '../assets/styles/PromotionsItem.style'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { WebpayMessage, WebpayPharagraph, WebpaySubtitle, WebpayTitle } from '../assets/fonts/typesetting'

import backgroundTracing1 from '../assets/images/tracing-webpay1.png'
import backgroundTracing2 from '../assets/images/tracing-webpay2.png'
import logo from '../assets/images/logo.png'

function PromotionBuy() {
    const modal = withReactContent(Swal)

    // ================================ Validación de formulario con YUP
    const schema = yup.object().shape({
        dni: yup.string()
            .required('Complete este campo.'),
        name: yup.string()
            .required('Complete este campo.'),
        email: yup.string()
            .required('Complete este campo.')
    })

    const history = useHistory();
    const { id } = useParams();
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [price, setprice] = useState()
    const [image, setimage] = useState()

    // =========================================== Cargar datos de promocion
    useEffect(() => {
        var config = {
            method: 'get',
            url: `https://api.esteticaandaluz.cl/promos/${id}`
        };

        axios(config)
            .then(function (response) {
                var dataprice = Object.values(response.data);
                setimage(dataprice[1])
                setprice(dataprice[2])
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    const onSubmit = data => {
        if (validateRUT(data.dni)) {
            var w = new FormData();
            w.append('idPromo', id);
            w.append('dni', data.dni);
            w.append('name', data.name);
            w.append('email', data.email);
            w.append('amount', price);

            console.log('idPromo', id);
            console.log('dni', data.dni);
            console.log('name', data.name);
            console.log('email', data.email);
            console.log('amount', price);
            var config = {
                method: 'post',
                url: 'https://api.esteticaandaluz.cl/webpay/create',
                data: w
            };

            axios(config)
                .then(function (response) {
                    console.log(response.data);
                    window.location.assign(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            modal.fire({
                icon: 'error',
                title: 'El rut es incorrecto.',
                showConfirmButton: false,
                timer: 1500
            })
        }

    }

    const backPage = () => {
        sessionStorage.clear('webpay')
        history.push('/')
    }

    return (
        <BuyPromoContainer bg={backgroundTracing1}>
            <BuyPromoContent bg={backgroundTracing2}>
                <BuyPromoContentCard>
                    <BuyPromoContentHeader>
                        <WebpayTitle>Promoción</WebpayTitle>
                        <BuyPromoImage src={image} />
                    </BuyPromoContentHeader>
                    <BuyPromoContentBody onSubmit={handleSubmit(onSubmit)}>
                        <BuyPromoHeader>
                            <WebpaySubtitle>Datos de pago</WebpaySubtitle>
                        </BuyPromoHeader>
                        <BuyPromoGroup>
                            <WebpayPharagraph>Rut</WebpayPharagraph>
                            <BuyPromoInput {...register('dni')} />
                            <WebpayMessage>{errors.dni?.message}</WebpayMessage>
                        </BuyPromoGroup>
                        <BuyPromoGroup>
                            <WebpayPharagraph>Nombre</WebpayPharagraph>
                            <BuyPromoInput {...register('name')} />
                            <WebpayMessage>{errors.name?.message}</WebpayMessage>
                        </BuyPromoGroup>
                        <BuyPromoGroup>
                            <WebpayPharagraph>Correo electrónico</WebpayPharagraph>
                            <BuyPromoInput {...register('email')} />
                            <WebpayMessage>{errors.email?.message}</WebpayMessage>
                        </BuyPromoGroup>
                        <BuyPromoDivision>
                            <WebpaySubtitle>Total a pagar: ${price}</WebpaySubtitle>
                        </BuyPromoDivision>
                        <BuyPromoFooter>
                            <BuyPromoBtnCancel onClick={backPage}>Cancelar</BuyPromoBtnCancel>
                            <BuyPromoBtnContinue type="submit">Validar</BuyPromoBtnContinue>
                        </BuyPromoFooter>
                    </BuyPromoContentBody>
                </BuyPromoContentCard>
            </BuyPromoContent>
        </BuyPromoContainer>
    )
}

export default PromotionBuy
