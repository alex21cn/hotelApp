import { Injectable }     from "@angular/core";
import { Http, Headers, Response, URLSearchParams  } from "@angular/http";
import { Observable }     from "rxjs/Observable";
import { Subject }        from "rxjs/Subject";
import "rxjs/add/operator/toPromise";
import { SearchRequest } from "../classes/search-request.class";
import { Hotel } from "../classes/hotel.class";
import {City}  from "../classes/city.class";

@Injectable()
export class HotelService {
    private headers = new Headers({ "Accept": "application/json" });
    private hotelBaseUrl = "/api/hotel/v1.0";
    //private hotelBaseUrl = "http://localhost:86/api/hotel/v1.0";
    observable: Observable<SearchRequest>;
    private hotels: Hotel[] = [];
    private cities: City[] = [];
    constructor(private http: Http) {
        //this.observable = new Observable<User>({ id: "", isAdmin: false, isAuthenticated: false, name: "", client: "" });
        //this.observable = Observable.create({ id: "", isAdmin: false, isAuthenticated: false, name: "", client: "" });
        //this.request = { city: "", country: "", checkInDate: new Date(), checkOutDate: new Date(),numberOfAdults: 2, numberOfChildren:0, childAges:null };
    }

    getHotels(request: SearchRequest): Promise<Hotel[]> {
        let url = `${this.hotelBaseUrl}/search/?id=${request.id}&ct=${request.city}&cu=${request.country}&ci=${request.checkInDate}&co=${request.checkOutDate}&rn=${request.rooms.length}`.replace(/-/g, "");
        for (let i = 0; i < request.rooms.length; i++) {
            url += `&r${i + 1}=${request.rooms[i].numberOfAdults}_${request.rooms[i].numberOfChildren}`;
            for (var j = 0; j < request.rooms[i].childAges.length; j++) {
                url += `_${request.rooms[i].childAges[j]}`;
            }
        }
        //let params = new URLSearchParams();
        //params.set('key', '[API_KEY]');
        //params.set('location', 'texas');
        //params.set('animal', animal);
        //params.set('format', 'json');
        //params.set('callback', 'JSONP_CALLBACK');
        let url = "api/hotels";
        return this.httpGet(url).then(
            response => this.hotels = (response.json().hotels || response.json().data) as Hotel[]
        );
    }

    getHotelDetail(id: number | string): Promise<Hotel> {
        //return this.getHotels(null).then(hotels => hotels.find(hotel => hotel.id === +id));
        //var url = `${this.hotelBaseUrl}/detail?hotelId=${id}`;
        var url = "api/detail";
        return this.httpGet(url).then(response => response.json().hotel || response.json().data);
    }

    getCities(): Promise<City[]> {
        //var url = `${this.hotelBaseUrl}/cities/`;
        return this.httpGet("api/cities")
            .then(
            response => this.cities = response.json().data as City[]
            );

    }

    private httpGet(url: string): Promise<any> {
        return this.http.get(url).toPromise().then(response => response).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error("An error occurred", error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}