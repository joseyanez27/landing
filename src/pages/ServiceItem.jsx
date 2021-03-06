import React from 'react'
import { useHistory } from 'react-router-dom'

import {
    ServiceItemContainer,
    ServiceContent,
    ItemContent,
    ServiceCard,
    ButtonService,
    ItemHeader
} from '../assets/styles/ServiceItem.style'
import { Paragraph, SubTitle } from '../assets/fonts/typesetting'
import defaultImg from '../assets/images/img-default.jpg'

function ServiceItem({ id, title, subtitle, image }) {
    const history = useHistory();



    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/servicio/${id}`)
    }

    return (
        <ServiceItemContainer >
            <ServiceContent bg={image !== undefined ? image : defaultImg}>
                <ServiceCard>
                    <ItemContent>
                        <ItemHeader>
                            <SubTitle>{title}</SubTitle>
                        </ItemHeader>
                        <Paragraph>{subtitle}</Paragraph>
                    </ItemContent>
                    <ButtonService onClick={handleSubmit}>Ver más</ButtonService>
                </ServiceCard>
            </ServiceContent>
        </ServiceItemContainer>
    )
}

export default ServiceItem