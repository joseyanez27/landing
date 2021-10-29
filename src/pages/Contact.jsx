import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { ReactSVG } from 'react-svg'

import {
    ContactContainer,
    ContactTitle,
    ContactContent,
    ContactInfo,
    InfoContent,
    InfoA,
    InfoB,
    InfoMap,
    ContactText,
    ContactForm,
    ContactPhone,
    ContactEmail,
    ContactSchedule,
    ContactLocation,
    Field,
    ButtonsContent,
    ButtonWhatsapp,
    ButtonSend
} from '../assets/styles/Contact.style'
import { Paragraph, SubTitle } from '../assets/fonts/typesetting'
import Map from './gui/Map'

import titleTracing from '../assets/images/tracing-titles.png'
import iconPhone from '../assets/icons/phone.svg'
import iconEmail from '../assets/icons/email.svg'
import iconClock from '../assets/icons/clock.svg'
import iconLocation from '../assets/icons/location.svg'
import iconWhatsapp from '../assets/icons/whatsapp.svg'
import Swal from 'sweetalert2'



function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();


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
                        <InfoA>
                            <ContactPhone>
                                <label>
                                    <ReactSVG src={iconPhone} alt="phone" />
                                </label>
                                <ContactText>
                                    <Paragraph>+56 9 8765 4321</Paragraph>
                                </ContactText>
                            </ContactPhone>
                            <ContactSchedule>
                                <label>
                                    <ReactSVG src={iconClock} alt="schedule" />
                                </label>
                                <ContactText>
                                    <Paragraph>Lunes a viernes:<br /> 9.30 a 18.00 hrs.</Paragraph>
                                    <Paragraph>Sabados:<br /> 10.00 a 14.30 hrs.</Paragraph>
                                </ContactText>
                            </ContactSchedule>
                        </InfoA>
                        <InfoB>
                            <ContactEmail>
                                <label>
                                    <ReactSVG src={iconEmail} alt="email" />
                                </label>
                                <ContactText>
                                    <Paragraph>contacto@esteticaandaluz.cl</Paragraph>
                                </ContactText>
                            </ContactEmail>

                            <ContactLocation>
                                <label>
                                    <ReactSVG src={iconLocation} />
                                </label>
                                <ContactText>
                                    <Paragraph>
                                        Antonio Bellet 77, Oficina 601. Providencia. Cerca del Metro Pedro de Valdivia.
                                    </Paragraph>
                                </ContactText>
                            </ContactLocation>
                        </InfoB>
                    </InfoContent>
                    <InfoMap>
                        <Map />
                    </InfoMap>
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
                        <ButtonWhatsapp href="https://api.whatsapp.com/send?phone=56987654321"><ReactSVG src={iconWhatsapp} />Whatsapp</ButtonWhatsapp>
                        <ButtonSend type="submit">Enviar</ButtonSend>
                    </ButtonsContent>
                </ContactForm>
            </ContactContent>
        </ContactContainer>
    )
}

export default Contact
