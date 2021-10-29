import React from 'react'
import { MapContainer } from '../../assets/styles/Map.style'


function Map() {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4777.645019681793!2d-70.62047548404098!3d-33.42660355478604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6397175ef5%3A0x1c928b6db8bf3b45!2sAntonio%20Bellet%2077%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1634132568956!5m2!1ses-419!2scl";

    return (
        <MapContainer>
            <iframe
                title="maps"
                src={mapUrl}
                style={{ border: "0" }}
                allowFullScreen
            ></iframe>
        </MapContainer>
    )
}

export default Map
