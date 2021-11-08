import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { ReactSVG } from 'react-svg'
import Swal from 'sweetalert2'

import {
    ContactContainer,
    ContactTitle,
    ContactContent,
    ContactInfo,
    InfoContent,
    ContactText,
    ContactForm,
    ContactPhone,
    ContactEmail,
    ContactSchedule,
    ContactLocation,
    Field,
    ButtonsContent,
    ButtonWhatsapp,
    ButtonSend,
    Info
} from '../assets/styles/Contact.style'
import { Paragraph, SubTitle } from '../assets/fonts/typesetting'

import titleTracing from '../assets/images/tracing-titles.png'
import iconPhone from '../assets/icons/phone.svg'
import iconEmail from '../assets/icons/email.svg'
import iconClock from '../assets/icons/clock.svg'
import iconWhatsapp from '../assets/icons/whatsapp.svg'
import logo from '../assets/images/logo-black.png'

import { whatsapp } from '../assets/common/external-links'


function Contact() {
    console.log(whatsapp);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [contactPhone, setContactPhone] = useState()
    const [contactEmail, setContactEmail] = useState()
    const [contactSchudle, setContactSchudle] = useState()
    const [contactWhatsapp, setContactWhatsapp] = useState()

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://apibrujasblancas.venatici.cl/contact/1'
        };

        axios(config)
            .then(function (response) {
                console.log(response.data.publicAt);
                setContactPhone('+56 '+response.data.phone)
                setContactEmail(response.data.email)
                setContactSchudle(response.data.publicAt)
                setContactWhatsapp('https://wa.me/56'+response.data.phone)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const onSubmit = data => {
        var formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("phone", data.phone);
        formdata.append("message", data.message);

        var config = {
            method: 'post',
            url: 'https://api.esteticaandaluz.cl/email/create',
            headers: {
                'content-type': 'multipart/form-data',
            },
            data: formdata
        };

        axios(config)
            .then(function (response) {
                if (response.status === 201) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Mensaje enviado',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(function (error) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Algo salio mal\nIntentalo nuevamente',
                    showConfirmButton: false,
                    timer: 1500
                })
            });
    }

    return (
        <ContactContainer id='contacto' >
            <ContactTitle bg={titleTracing}>
                <SubTitle>Contacto</SubTitle>
            </ContactTitle>
            <ContactContent>
                <ContactInfo>
                    <InfoContent>
                        <Info>
                            <img src={logo} />
                            <ContactPhone>
                                <label>
                                    <ReactSVG src={iconPhone} alt="phone" />
                                </label>
                                <ContactText>
                                    <Paragraph>{contactPhone}</Paragraph>
                                </ContactText>
                            </ContactPhone>
                            <ContactEmail>
                                <label>
                                    <ReactSVG src={iconEmail} alt="email" />
                                </label>
                                <ContactText>
                                    <Paragraph>{contactEmail}</Paragraph>
                                </ContactText>
                            </ContactEmail>
                            <ContactSchedule>
                                <label>
                                    <ReactSVG src={iconClock} alt="schedule" />
                                </label>
                                <ContactText>
                                    <Paragraph>{contactSchudle}</Paragraph>
                                </ContactText>
                            </ContactSchedule>
                        </Info>
                    </InfoContent>
                </ContactInfo>
                <ContactForm onSubmit={handleSubmit(onSubmit)}>
                    <Field>
                        <Paragraph>Nombre</Paragraph>
                        <input {...register("name", { required: true })} />
                        {errors.name && <span>Este campo es necesario.</span>}
                    </Field>

                    <Field>
                        <Paragraph>Correo</Paragraph>
                        <input {...register("email", { required: true })} />
                        {errors.email && <span>Este campo es necesario.</span>}
                    </Field>
                    <Field>
                        <Paragraph>Teléfono</Paragraph>
                        <input {...register("phone", { required: true })} />
                        {errors.phone && <span>Este campo es necesario.</span>}
                    </Field>
                    <Field>
                        <Paragraph>Mensaje</Paragraph>
                        <textarea {...register("message", { required: true })} />
                        {errors.message && <span>Este campo es necesario.</span>}
                    </Field>
                    <ButtonsContent>
                        {/* TODO: Agregar redireccionamiento a whatsapp */}
                        <ButtonWhatsapp href={contactWhatsapp}><ReactSVG src={iconWhatsapp} />Whatsapp</ButtonWhatsapp>
                        <ButtonSend type="submit">Enviar</ButtonSend>
                    </ButtonsContent>
                </ContactForm>
            </ContactContent>
        </ContactContainer>
    )
}

export default Contact
