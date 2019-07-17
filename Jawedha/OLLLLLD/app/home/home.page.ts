import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DrawerState } from 'ion-bottom-drawer';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';

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

  constructor(private platform: Platform) {

    this.shouldBounce = true;
    this.minimumHeight = 50;
    this.dockedHeight = 150;
    this.topDistance = 50;
    this.state = DrawerState.Bottom;
  }

  ngOnInit() {
    this.platform.ready().then((readySource) => {
      this.loadMap();
    });
  }

  segmentChanged(ev: any) {
    this.segmentValue = ev.detail.value;
    console.log('Segment changed', ev.detail.value);

    if (this.segmentValue === 'map') {
      this.defaultSegment = true;
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

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCxg2rzjWY1vJmSIPi-dG0KXVxDTBGxNco',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCxg2rzjWY1vJmSIPi-dG0KXVxDTBGxNco'
    });

    let mapOptions: GoogleMapOptions = {

       zoom: 16,
       scrollwheel: false,
       gestureHandling: 'none',
  mapType: 'ROADMAP',
styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Meeeeeeeee!',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

}
