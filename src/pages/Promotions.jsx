import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Paragraph, SubTitle } from '../assets/fonts/typesetting'
import { PromotionContent, PromotionsContainer, PromotionTitle } from '../assets/styles/Promotions.style'

import promotionsTracing from '../assets/images/tracing-promotions.png'
import titleTracing from '../assets/images/tracing-titles.png'
import PromotionItem from './PromotionItem'
import image from '../assets/images/test-image.png'


function Promotions() {
    const [data, setData] = useState()

    useEffect(() => {
        /*var config = {
            method: 'get',
            url: 'https://api.esteticaandaluz.cl/promos',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                var dataApi = Object.values(response.data);
                setData(dataApi)
            })
            .catch(function (error) {
                console.log(error);
            });*/
    }, [])

    

    return (
        <PromotionsContainer id='promociones' bg={promotionsTracing}>
            <PromotionTitle bg={titleTracing}>
                <SubTitle>Promociones</SubTitle>
            </PromotionTitle>
            <PromotionContent>
                    {/*(Array.isArray(data)) ?
                        data.map(promo =>
                            <PromotionItem {...promo} />
                        ) : <Paragraph>Sin servicios</Paragraph>*/}
                <PromotionItem mainImage={image} />
                <PromotionItem mainImage={image} />
                <PromotionItem mainImage={image} />
            </PromotionContent>
        </PromotionsContainer>
    )
}

export default Promotions
