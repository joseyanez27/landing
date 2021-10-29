import styled from "styled-components";

export const MapContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 300px;
  
    iframe {
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        height: 300px;
        width: 100%;
        position: absolute;
        z-index: 0;
    }
`;