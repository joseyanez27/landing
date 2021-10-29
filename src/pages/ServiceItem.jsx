import React from 'react'
import { useHistory } from 'react-router-dom'

import {
    ServiceItemContainer,
    ServiceContent,
    ItemContent,
    ServiceCard,
    ButtonService
} from '../assets/styles/ServiceItem.style'
import { Paragraph, SubTitle } from '../assets/fonts/typesetting'
import defaultImg from '../assets/images/img-default.jpg'

function ServiceItem({ id, title, subtitle, mainImage }) {
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/servicio/${id}`)
    }

    return (
        <ServiceItemContainer >
            <ServiceContent bg={mainImage !== undefined ? mainImage : defaultImg}>
                <ServiceCard>
                    <ItemContent>
                        <SubTitle>{title}</SubTitle>
                        <Paragraph>{subtitle}</Paragraph>
                    </ItemContent>
                    <ButtonService onClick={handleSubmit}>Ver más</ButtonService>
                </ServiceCard>
            </ServiceContent>
        </ServiceItemContainer> 
    )
}

export default ServiceItem