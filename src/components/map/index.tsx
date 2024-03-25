import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './index.less';
import { LatLngExpression } from "leaflet";
import ChangeView from "./change-view";

// import markerIcon from '../../../assets/images/icon-location.svg';

const IPMap = () => {
  const displayName = 'iptracker-map';
  const [mapCenter, setMapCenter] = useState<LatLngExpression>([0, 0])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log([position.coords.latitude, position.coords.longitude])
        setMapCenter([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }

    const tileLayer = document.querySelector('.leaflet-attribution-flag');
    tileLayer?.setAttribute('style', 'display: none');
  }, [])

  return (
    <MapContainer center={mapCenter} style={{ height: 'calc(100vh - 280px)', width: '100wh' }} zoom={10} scrollWheelZoom={true}>
      <ChangeView center={mapCenter} zoom={10} />
      <TileLayer
        attribution='&copy; Siddharth Bhawalkar'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={mapCenter}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )

}

export default IPMap;