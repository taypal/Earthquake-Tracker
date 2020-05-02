import React, { Component, createRef } from 'react'

class GoogleMap extends Component {
    googleMapRef = React.createRef()

    componentDidMount() {
        const googleScript = document.createElement('script')
        // var AIzaSyA5CU0AiAHCtMw_EuwMGiDIBOBoZCKyXJU;
        googleScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&libraries=visualization&callback=initMap`
        window.document.body.appendChild(googleScript)

        googleScript.addEventListener('load', {
            googleMap: this.createGoogleMap(),
            marker: this.createMarker()
        })
    }

    createGoogleMap = () =>
        new window.google.maps.Map(this.googleMapRef.current, {
            zoom: 16,
            center: {
                lat: 43.642567,
                lng: -79.387054,
            },
            disableDefaultUI: true,
        })

    createMarker = () =>
        new window.google.maps.Marker({
            position: { lat: 43.642567, lng: -79.387054 },
            map: this.googleMap,
        })

    render() {
        return (
            <div
                id="google-map"
                ref={this.googleMapRef}
                style={{ width: '400px', height: '300px' }}
            />
        )
    }
}

export default GoogleMap;