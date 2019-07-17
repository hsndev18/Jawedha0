import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
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
import { Nav } from '../../service/nav.service';
import { Platform } from '@ionic/angular';
@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    map: any;
    artistData: any;
    nav: any;
    place: any;

    constructor(
        private platform: Platform,
        public api: DataService,
        nav: Nav) {
        this.nav = nav;
        this.place = this.nav.get('place');

    }

    ngOnInit() {
        this.platform.ready().then((readySource) => {

            this.loadMap();
            this.getArtist();
        });
    }//dd

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

    loadMap() {
        let latLng = new LatLng(this.place.coords.lat, this.place.coords.lng);
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
            }
        };


        this.map = GoogleMaps.create('map_canvas', mapOptions);

        let marker: Marker = this.map.addMarkerSync({
            icon: 'red',
            animation: 'DROP',
            position: this.place.coords

        });
    }

}
