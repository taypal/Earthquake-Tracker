import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '300px',
    display: "flex",
    justifyContent: "center",
    alignItems: "top",
    margin: '0',
    left: '0'
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