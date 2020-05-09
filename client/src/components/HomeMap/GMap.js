import React, { useEffect, useRef } from 'react';
import axios from "axios";

const GMap = () => {
    const googleMapRef = useRef(null);
    let googleMap = null;

    // list of icons
    const iconList = {
        icon1: 'https://i.imgur.com/a7qk4pS.png',
        icon2: 'https://i.imgur.com/kZG04bg.png'
    }

    // list of the marker object along with icon
    const markerList = [
        // { lat: 41, lng: -112, icon: iconList.icon1 },
        // { lat: 40, lng: -110, icon: iconList.icon2 }
    ]

    function getQuakes() {
        return axios.get("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=12&starttime=2000-01-01&minmagnitude=8.0");
    }

    useEffect(() => {
        getQuakes()
            .then(res => {
                for (var i = 0; i < res.data.features.length; i++) {
                    markerList.push({
                        lat: res.data.features[i].geometry.coordinates[1],
                        lng: res.data.features[i].geometry.coordinates[0],
                        icon: iconList.icon2
                    })
                }
                return markerList
            })
            .then(markerList => {
                googleMap = initGoogleMap();
                var bounds = new window.google.maps.LatLngBounds();
                markerList.map(x => {
                    const marker = createMarker(x);
                    bounds.extend(marker.position);
                });
                googleMap.fitBounds(bounds); // the map to contain all markers
            })

    }, []);



    // initialize the google map
    const initGoogleMap = () => {
        return new window.google.maps.Map(googleMapRef.current, {
            disableDefaultUI: true,
            styles: [
                { elementType: 'geometry', stylers: [{ color: '#0f111d' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#929395' }] },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#929395' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#929395' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{ color: '' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#929395' }]
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
                    stylers: [{ color: '#32323e' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#515c6d' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#32323e' }]
                }
            ]
        });
    }

    // create marker on google map
    const createMarker = (markerObj) => new window.google.maps.Marker({
        position: { lat: markerObj.lat, lng: markerObj.lng },
        map: googleMap,
        icon: {
            url: markerObj.icon,
            // set marker width and height
            scaledSize: new window.google.maps.Size(10, 10)
        }
    });

    return <div className="mt-3"

        ref={googleMapRef}

        style={{ height: 300 }}
    />
}

export default GMap;