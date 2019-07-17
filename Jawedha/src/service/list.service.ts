import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ListService {

    data = '';

    constructor(public http: HttpClient) {
    }


    getData(): Observable<any> {
        return this.http.get('http://g2.iobootcamp.com/api/v1/serviceslist', { responseType: 'text' });
    }
}