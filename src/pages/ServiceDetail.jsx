import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { ReactSVG } from 'react-svg'

import {
    DetailsContainer,
    DetailsHeader,
    DetailsHeaderContent,
    DetailsBody,
    TitleContent,
    DescriptionContent,
    SubTitleContent,
    PhotosContent,
    ButtonsContent,
    ButtonAgenda,
    ButtonWhatsapp
} from '../assets/styles/ServiceDetails.style'

import detailsTracing from '../assets/images/tracing-details-service.png'
import detailSubTitleTracing from '../assets/images/tracing-titles.png'
import iconWatsapp from '../assets/icons/whatsapp.svg'
import { Paragraph, SubTitle, Title } from '../assets/fonts/typesetting'
import Footer from './gui/Footer'

import defaultImg from '../assets/images/img-default.jpg'

function ServiceDetail() {

    const { id } = useParams();

    const [mainImage, setMainImage] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [images, setImages] = useState();

    useEffect(() => {
        var config = {
            method: 'get',
            url: `https://api.esteticaandaluz.cl/services/${id}`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                const mainImage = JSON.stringify(response.data.mainImage);
                const title = JSON.stringify(response.data.title);
                const description = JSON.stringify(response.data.description);
                const images = JSON.stringify(response.data.images);
                setMainImage(mainImage)
                setTitle(title)
                setDescription(description)
                setImages(images)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [id])

    //console.log(mainImage)
    return (
        <DetailsContainer>
            <DetailsHeader bg={mainImage !== undefined ? mainImage.replace('https:', '') : defaultImg}>
                <DetailsHeaderContent bg={detailsTracing}>
                    <TitleContent>
                        <Title>{title}</Title>
                    </TitleContent>
                </DetailsHeaderContent>
            </DetailsHeader>
            <DetailsBody>
                <DescriptionContent>
                    <Paragraph>{description}</Paragraph>
                </DescriptionContent>
                {(images !== undefined) ? <></> :
                    <>
                        <SubTitleContent bg={detailSubTitleTracing}>
                            <SubTitle>Fotos</SubTitle>
                        </SubTitleContent>
                        <PhotosContent>
                            {/*<Swiper slidesPerView={3} spaceBetween={30} pagination={{
                                "clickable": true}} className="mySwiper">
                                <SwiperSlide>Slide 1</SwiperSlide>
                                <SwiperSlide>Slide 2</SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                                <SwiperSlide>Slide 5</SwiperSlide>
                                <SwiperSlide>Slide 6</SwiperSlide>
                                <SwiperSlide>Slide 7</SwiperSlide>
                                <SwiperSlide>Slide 8</SwiperSlide>
                                <SwiperSlide>Slide 9</SwiperSlide>
                            </Swiper>*/}
                        </PhotosContent>
                    </>}
                <ButtonsContent>
                    <ButtonAgenda href="https://esteticaandaluz.agendapro.com/cl/workflow?local=3536"><Paragraph>¡Agenda tu hora!</Paragraph></ButtonAgenda>
                    <ButtonWhatsapp href="https://api.whatsapp.com/send?phone=56987654321"><ReactSVG src={iconWatsapp} /> <Paragraph>Whatsapp</Paragraph></ButtonWhatsapp>
                </ButtonsContent>
            </DetailsBody>
            <Footer />
        </DetailsContainer>
    )
}

export default ServiceDetail
