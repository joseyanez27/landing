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
        var config = {
            method: 'get',
            url: 'https://apibrujasblancas.venatici.cl/promotions',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                //console.log(response.data.length);
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])



    return (data.length > 0) ? (
        <PromotionsContainer id='promociones' bg={promotionsTracing}>
            <PromotionTitle bg={titleTracing}>
                <SubTitle>Promociones</SubTitle>
            </PromotionTitle>
            <PromotionContent>
                {(Array.isArray(data)) ?
                    data.map(promo =>
                        <PromotionItem {...promo} />
                    ) : <Paragraph>Sin servicios</Paragraph>
                }
            </PromotionContent>
        </PromotionsContainer>
    ) : <></>
}

export default Promotions
