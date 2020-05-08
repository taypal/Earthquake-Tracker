import React, { useEffect, useRef } from 'react';

const GMap = () => {
    const googleMapRef = useRef(null);
    let googleMap = null;

    // list of icons
    const iconList = {
        icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
        icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
        icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
        icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
    }

    // list of the marker object along with icon
    const markerList = [
        { lat: 59.2967322, lng: 18.0009393, icon: iconList.icon1 },
        { lat: 59.2980245, lng: 17.9971503, icon: iconList.icon2 },
        { lat: 59.2981078, lng: 17.9980875, icon: iconList.icon3 },
        { lat: 59.2987638, lng: 17.9917639, icon: iconList.icon4 }
    ]

    useEffect(() => {
        googleMap = initGoogleMap();
        var bounds = new window.google.maps.LatLngBounds();
        markerList.map(x => {
            const marker = createMarker(x);
            bounds.extend(marker.position);
        });
        googleMap.fitBounds(bounds); // the map to contain all markers
    }, []);


    // initialize the google map
    const initGoogleMap = () => {
        return new window.google.maps.Map(googleMapRef.current, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
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

    return <div
        ref={googleMapRef}
        style={{ width: 600, height: 300 }}
    />
}

export default GMap;