import React, { useEffect, useState } from "react";
import { ServicesContainer } from "../assets/styles/Services.style";
import servicesTracing from "../assets/images/tracing-services.png";
import ServiceItem from "./ServiceItem";
import axios from "axios";
import { Paragraph } from "../assets/fonts/typesetting";
//import data from '../assets/testContentPage.json'

function Services() {
  const [data, setData] = useState();

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://apibrujasblancas.venatici.cl/services"
    };

    axios(config)
      .then(function (response) {
        var dataAPI = Object.values(response.data);
        //console.log(dataAPI);
        setData(dataAPI);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ServicesContainer id="servicios" bg={servicesTracing}>
      {Array.isArray(data) ? (
        data.map((service, index) => <ServiceItem key={index} {...service} />)
      ) : (
        <Paragraph>Sin servicios</Paragraph>
      )}
    </ServicesContainer>
  );
}

export default Services;
