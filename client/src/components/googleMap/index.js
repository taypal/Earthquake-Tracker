import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import "./script";

const mapStyles = {
    width: '900px',
    height: '500px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: '0',
    left: '50px'
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
{ elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
{ elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
{
    featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
},
{
    featureType: 'poi',
        elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
},
{
    featureType: 'poi.park',
        elementType: 'geometry',
            stylers: [{ color: '#263c3f' }]
},
{
    featureType: 'poi.park',
        elementType: 'labels.text.fill',
            stylers: [{ color: '#6b9a76' }]
},
{
    featureType: 'road',
        elementType: 'geometry',
            stylers: [{ color: '#38414e' }]
},
{
    featureType: 'road',
        elementType: 'geometry.stroke',
            stylers: [{ color: '#212a37' }]
},
{
    featureType: 'road',
        elementType: 'labels.text.fill',
            stylers: [{ color: '#9ca5b3' }]
},
{
    featureType: 'road.highway',
        elementType: 'geometry',
            stylers: [{ color: '#746855' }]
},
{
    featureType: 'road.highway',
        elementType: 'geometry.stroke',
            stylers: [{ color: '#1f2835' }]
},
{
    featureType: 'road.highway',
        elementType: 'labels.text.fill',
            stylers: [{ color: '#f3d19c' }]
},
{
    featureType: 'transit',
        elementType: 'geometry',
            stylers: [{ color: '#2f3948' }]
},
{
    featureType: 'transit.station',
        elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
},
{
    featureType: 'water',
        elementType: 'geometry',
            stylers: [{ color: '#17263c' }]
},
{
    featureType: 'water',
        elementType: 'labels.text.fill',
            stylers: [{ color: '#515c6d' }]
},
{
    featureType: 'water',
        elementType: 'labels.text.stroke',
            stylers: [{ color: '#17263c' }]
}
}

export class MapContainer extends Component {

    googleMapRef = React.createRef()

    componentDidMount() {

        const usgsScript = document.createElement('script')

        usgsScript.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
        document.getElementsByTagName('head')[0].appendChild(usgsScript);
    }

    createLayer = () =>
        new window.google.map.visualization.HeatmapLayer({
            data: "heatmapData",
            dissipating: false,
            map: "map"
        })

    render() {
        return (
            <div>
                <Map

                    google={this.props.google}
                    zoom={2}
                    style={mapStyles}
                    initialCenter={{
                        lat: 40.5692,
                        lng: -111.8947
                    }}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA5CU0AiAHCtMw_EuwMGiDIBOBoZCKyXJU'
})(MapContainer);