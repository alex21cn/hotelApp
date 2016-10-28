import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Observable }         from "rxjs/Observable";
import * as _ from "lodash";
import { HotelService } from "../services/hotel.service";
import { UserService } from "../services/user.service";
import { City } from "../classes/city.class";
import { CitySearchComponent } from "./city-search.component"
import {SearchRequest, RequestRoom} from "../classes/search-request.class";
import { CompleterService, CompleterData } from 'ng2-completer';

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

    constructor(private router: Router, private service: HotelService, private user: UserService, private completerService: CompleterService) {
        this.service.getCities().then(cities => this.cityService = completerService.local(cities, "name,country,airportCode", "name,country,airportCode"));
    }

    ngOnInit(): void {
        let city: City = { name: "Toronto", country: "Canada", airportCode: "YYZ" };
        this.request = new SearchRequest();
        this.request.city = city;
        this.request.checkInDate = new Date();
        this.request.checkOutDate = new Date();
        this.numberOfRooms = 1;
        this.observableRequest = new Observable(o => o.next(this.request));
        this.observableRequest.subscribe(value => {
            this.totalNumberOfAdults = _.sumBy(this.request.rooms, "numberOfAdults");
            this.totalNumberOfChildren = _.sumBy(this.request.rooms, "numberOfChildren");
            console.log(value);
        });

    }

    AddOrRemoveRoom(numberOfRooms: number): void {
        if (numberOfRooms < this.request.rooms.length)
            this.request.rooms.pop();
        if (numberOfRooms > this.request.rooms.length)
            this.request.rooms.push({ numberOfAdults: 2, numberOfChildren: 0, childAges: [] });
        this.observableRequest.publish(this.request);
    }

    AddOrRemoveChild(room: RequestRoom, numberOfChildren: number): void {
        if (numberOfChildren < room.childAges.length)
            room.childAges.pop();
        if (numberOfChildren > room.childAges.length)
            room.childAges.push(6);
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