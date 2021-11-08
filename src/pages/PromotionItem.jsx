import React from 'react'
import { useHistory } from 'react-router-dom'

import {
    PromotionItemContainer,
    PromotionItemContent,
    ImagePromo,
} from '../assets/styles/PromotionsItem.style'




function PromotionItem({ id, mainImage }) {
    const history = useHistory();

    const BuyPromo = () => {
        localStorage.setItem('webpay', true)
        //history.push(`/promocion/${id}`)
    }

    return (
        <PromotionItemContainer>
            <PromotionItemContent>
                <ImagePromo type="image" src={mainImage} onClick={BuyPromo} />
            </PromotionItemContent>
        </PromotionItemContainer>
    )
}

export default PromotionItem
