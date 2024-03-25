import { LatLngExpression } from "leaflet";
import React, { FC } from "react";
import { useMap } from "react-leaflet";

interface ChangeViewProps {
    center: LatLngExpression,
    zoom: number
}

const ChangeView: FC<ChangeViewProps> = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default ChangeView;