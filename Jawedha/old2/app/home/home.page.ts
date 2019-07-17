import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService } from '../data.service';
import { Nav } from '../nav.service';
import { DrawerState } from 'ion-bottom-drawer';
import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapOptions,
    CameraPosition,
    MarkerOptions,
    Marker,
    Environment,
    LatLng
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DetailsPage } from '../details/details.page';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
    map: GoogleMap;

    segmentValue: string;
    defaultSegment: boolean;
    minimumHeight: number;
    state: DrawerState;
    dockedHeight: number;
    distanceTop: number;
    shouldBounce: boolean;
    topDistance: number;
    items: any;
    test: any;
    artistData: any;
    nav: any;
    mapPlace: any;

    constructor(
        private platform: Platform,
        private geolocation: Geolocation,
        public api: DataService,
        nav: Nav
    ) {

        this.nav = nav;
        this.shouldBounce = true;
        this.minimumHeight = 0;
        this.dockedHeight = 150;
        this.topDistance = 50;
        this.state = DrawerState.Bottom;
        this.items = [{
            name: 'hello',
            category: 'hello2',
            photos: ['https://spaceplace.nasa.gov/review/blue-sky/bluesky.en.png'],
            descrption: 'hellooooooooooooooooooooooo',
            coords: {
                lat: 18.2957778,
                lng: 42.7102238
            },
        }, {
            name: 'test',
            photos: ['https://www.w3schools.com/w3css/img_lights.jpg'],
            descrption: 'hellooooooooooooo2oooooooooo',
            category: 'test2',
            coords: {
                lat: 18.2958277,
                lng: 42.7100199
            },
        }];
        this.test = null;
    }

    ngOnInit() {
        this.platform.ready().then((readySource) => {
            Environment.setEnv({
                API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCxg2rzjWY1vJmSIPi-dG0KXVxDTBGxNco',
                API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCxg2rzjWY1vJmSIPi-dG0KXVxDTBGxNco'
            });
            this.loadMap();
            this.getArtist();
        });
    }


    openAddPage(data) {
        console.log('test');
        this.nav.push('details', data);
    }

    getArtist() {
        this.api.getData().subscribe(data => {
            this.artistData = JSON.parse(data).music;
            this.artistData.map(aD => {
                aD.tempRating = '';
            });
            console.log('Data', JSON.parse(data).music);
        });
    }

    onModelChange(event, selectedData) {
        selectedData.tempRating = event;
        console.log('SelectData', selectedData);
    }

    segmentChanged(ev: any) {
        this.segmentValue = ev.detail.value;
        console.log('Segment changed', ev.detail.value);

        if (this.segmentValue === 'map') {
            this.defaultSegment = true;
            // this.loadMap();
        } else {
            this.defaultSegment = false;
        }

    }

    doRefresh(event) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }

    loadMap() {

        let myLocation: any;
        let jsonData: any;
        let latLng: any;


        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log(resp.coords);
            myLocation = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude
            };

            latLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
            console.log(latLng);
            const mapOptions: GoogleMapOptions = {
                camera: {
                    target: latLng,
                    zoom: 18,
                    tilt: 30
                },
                controls: {
                    compass: false,
                    myLocationButton: false,
                    myLocation: false,   // (blue dot)
                    indoorPicker: false,
                    zoom: false,          // android only
                    mapToolbar: false     // android only
                },
                styles: [
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
                ]
            };

            this.map = GoogleMaps.create('map_canvas', mapOptions);

            let marker: Marker = this.map.addMarkerSync({
                icon: 'blue',
                animation: 'DROP',
                position: myLocation

            });

            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
               console.log(this.state);
              //  this.state = DrawerState.Top;
            });
            console.log(this.items);

            for (const row of this.items) {
                console.log(row.coords);

                let markerx: Marker = this.map.addMarkerSync({
                    icon: 'red',
                    animation: 'DROP',
                    position: row.coords
                });
                markerx.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
                    this.mapPlace = row;
                    this.state = DrawerState.Top;
                    //alert('clicked');
                });

            }

        }).catch((error) => {
            console.log('Error getting location', error);
        });

    }

}
