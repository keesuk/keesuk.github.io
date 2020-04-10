import React from 'react'
import MapGL from "react-map-gl";

export default function Map({ width, height}) {
    return <MapGL width={width} height={height} />;
}