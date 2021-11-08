import React from 'react'
import axios from 'axios'

const getServices = ({id}) => {
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
    return
}
