//모든 다른 클래스에 대한 명령어들
//해당 인터페이스의 조건을 만족한다면
//해당 클래스가 lat와 lng 를 가지고있다면 addMarker의 인수로 사용가능한거
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
export class CustomMap {
  //Map가 class 임
  //구글맵에 접근을 제한
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
        mapId: 'DEMO_MAP_ID', // Map ID is required for advanced markers.
        //mapOptions => zoom, center
        // zoom: number | null;
        // center?: google.maps.LatLng | null | google.maps.LatLngLiteral;
      }
    );
  }

  //Marker대신 advancedMarkerView
  addMarker(mappable: Mappable): void {
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
  // declare namespace google.maps.marker {
  //   map?: google.maps.Map | null;

  //   export class InfoWindow extends google.maps.MVCObject {
  // export interface InfoWindowOptions {
}
