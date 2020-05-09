import React, { useState, useEffect, useRef } from 'react';
import API from "../../utils/API";
import auth0Client from '../../Auth';

var profile = "";
let markerList = [];

const GMap = ({ triggerRender, queryState }) => {


    const [googMap, setgoogMap] = useState()

    function renderMap() {
        console.log("render map now");
        googleMap = initGoogleMap();
        var bounds = new window.google.maps.LatLngBounds();
        console.log(`mark ${JSON.stringify(markerList)}`);

        markerList.map(x => {
            const marker = createMarker(x);
            bounds.extend(marker.position);
        });
        googleMap.fitBounds(bounds); // the map to contain all markers
        setgoogMap(googleMap)
    }

    useEffect(() => {
        console.log('trigger render useeffecg');

        if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
            console.log('hopeful code');

            window.google.maps.event.trigger(googMap, 'resize');
        }
    }, [triggerRender]);


    useEffect(() => {
        // Run! Like go get some data from an API.
        async function fetchUser() {
            if (auth0Client.getProfile()) {
                profile = auth0Client.getProfile().name.toString()
                console.log(profile)
                var user = await API.createUser({
                    email: profile,
                })
                console.log(user)
            }
        }
        fetchUser()
    }, []);

    // Load all load earthquake data and set state
    useEffect(() => {

        //   if (!queryState.initial) {
        //fetchUserDefault()
        console.log(`querystate ${JSON.stringify(queryState)}`);

        API.getUserEarthquakes(queryState.magnitude, queryState.latitude, queryState.longitude, queryState.proximity)
            .then(res => {
                console.log(queryState.latitude);
                markerList.push({
                    lat: parseInt(queryState.latitude),
                    lng: parseInt(queryState.longitude),
                    icon: iconList.icon1
                });
                for (var i = 0; i < res.data.features.length; i++) {
                    markerList.push({
                        lat: res.data.features[i].geometry.coordinates[1],
                        lng: res.data.features[i].geometry.coordinates[0],
                        icon: iconList.icon2
                    })
                }

                console.log(markerList);
                return markerList
            })
            .then(ml => {
                markerList = ml
                console.log(`new marker list? ${JSON.stringify(markerList)}`);
                renderMap();
                markerList = [];
            })
        //   }
    }, [queryState, triggerRender])

    const googleMapRef = useRef(null);
    let googleMap = null;

    // list of icons
    const iconList = {
        icon1: 'https://i.imgur.com/jIOZTQI.png',
        icon2: 'https://i.imgur.com/BGMhfKn.png'
    }

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
            scaledSize: new window.google.maps.Size(50, 50)
        }
    });

    console.log(`test ${triggerRender}`)
    return <div className="mt-3"


        ref={googleMapRef}

        style={{ height: 300 }}
    >
    </div>


}

export default GMap;