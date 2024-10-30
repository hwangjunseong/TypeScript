"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMap = void 0;
class CustomMap {
    constructor(divId) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
            mapId: 'DEMO_MAP_ID', // Map ID is required for advanced markers.
            //mapOptions => zoom, center
            // zoom: number | null;
            // center?: google.maps.LatLng | null | google.maps.LatLngLiteral;
        });
    }
    //Marker대신 advancedMarkerView
    addMarker(mappable) {
        // mappable. 공통된 메소드만 .했을 때 나옴
        // console.log(this.googleMap);
        const marker = new google.maps.marker.AdvancedMarkerElement({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });
        // console.log(marker);
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            //첫번째 인자 map에 대한 참조, 2번째인자 marker
            infoWindow.open(this.googleMap, marker);
        });
    }
}
exports.CustomMap = CustomMap;
