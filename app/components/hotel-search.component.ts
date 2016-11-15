import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import * as Rx from "rxjs/Rx";
import { Observable }         from "rxjs/Observable";
//import * as _ from "lodash";
import { HotelService } from "../services/hotel.service";
import { UserService } from "../services/user.service";
import { City } from "../models/city.interface";
import {SearchRequest, RequestRoom} from "../models/search-request.class";
import { CompleterService, CompleterData } from "ng2-completer";
let _ = require("lodash");

@Component({
    selector: "hotel-search",
    moduleId: module.id,
    templateUrl: "../templates/hotel-search.template.html"
    //providers: [HotelService]
    //directives: [CitySearchComponent]
})
export class HotelSearchComponent implements OnInit {
    private cities: City[];
    private cityService: CompleterData;
    private request: SearchRequest;
    private observableRequest: Observable<SearchRequest>;
    private selectedCity: string;
    private numberOfRooms: number;
    private totalNumberOfAdults: number;
    private totalNumberOfChildren: number;
    private subject: any;

    constructor(private router: Router, private service: HotelService, private user: UserService, private completerService: CompleterService) {
        this.service.getCities().subscribe(cities => this.cityService = completerService.local(cities, "name,country,airportCode", "name,country,airportCode"));
    }

    ngOnInit(): void {
        let city: City = { name: "Toronto", country: "Canada", airportCode: "YYZ" };
        this.request = new SearchRequest();
        this.request.city = city;
        this.request.checkInDate = new Date();
        this.request.checkOutDate = new Date();
        this.numberOfRooms = 1;
        // this.observableRequest = Observable.create((observable:any) =>{
        //     this.updateOccupancy(); 
        //     console.log(observable);
        // });
        //this.observableRequest.subscribe();
        this.subject = new Rx.Subject();
        this.subject.subscribe(
            (observable:any) => {
            this.updateOccupancy(); 
            console.log(observable);
            }
        );
        this.subject.next();
    }

    addOrRemoveRoom(numberOfRooms: number): void {
        if (numberOfRooms < this.request.rooms.length)
            this.request.rooms.pop();
        if (numberOfRooms > this.request.rooms.length)
            this.request.rooms.push({ numberOfAdults: 2, numberOfChildren: 0, childAges: [] });
//        this.updateOccupancy();
        // this.observableRequest.subscribe(value => {
        //     //never hits this line
        //     console.log(value);
        // });
        this.subject.next();
    }

    addOrRemoveChild(room: RequestRoom, numberOfChildren: number): void {
        if (numberOfChildren < room.childAges.length)
            room.childAges.pop();
        if (numberOfChildren > room.childAges.length)
            room.childAges.push(6);
        //this.updateOccupancy();
        // this.observableRequest.subscribe(value => {
        //     console.log(value);
        // });
        this.subject.next();
    }

    updateOccupancy(): void {
        this.totalNumberOfAdults = _.sumBy(this.request.rooms, "numberOfAdults");
        this.totalNumberOfChildren = _.sumBy(this.request.rooms, "numberOfChildren");
    }

    search(): void {
        this.request.id = Date.now();
        //this.request.city = this.selectedCity;
        //this.request.city.country = this.selectedCity;
        this.user.setSearch(this.request);
        let navigationExtras: NavigationExtras = {
            queryParams: { "searchId": this.request.id }
            //fragment: "anchor"
        };
        //let link = ["/hotels", this.request.id];
        this.router.navigate(["/list"], navigationExtras);
    }

}