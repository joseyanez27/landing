import React from 'react'
import {
    Description,
    DetailItemContainer,
    DetailItemContent,
    Image
} from '../assets/styles/ServiceDetailItem.style'

import noImage from '../assets/images/no-image.png'
import { Paragraph } from '../assets/fonts/typesetting'

function ServiceDetailItem() {
    return (
        <DetailItemContainer>
            <DetailItemContent>
                <Image src={noImage} />
                <Description>
                    <Paragraph>
                        Loren impsu
                    </Paragraph>
                </Description>
            </DetailItemContent>
        </DetailItemContainer>
    )
}

export default ServiceDetailItem
