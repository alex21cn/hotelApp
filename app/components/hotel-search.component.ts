import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
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
    private selectedCity: string;
    constructor(private router: Router, private service: HotelService, private user: UserService, private completerService: CompleterService) {
        this.service.getCities().then(cities => this.cityService = completerService.local(cities, "name,country,airportCode", "name,country,airportCode"));
    }

    ngOnInit(): void {
        let city: City = { name: "Toronto", country: "Canada", airportCode: "YYZ" };
        this.request = new SearchRequest();
        this.request.city = city;
        this.request.checkInDate = new Date();
        this.request.checkOutDate = new Date();
    }

    search(): void {
        this.request.id = Date.now();
        //this.request.city = this.selectedCity.name;
        //this.request.country = this.selectedCity.country;
        this.user.setSearch(this.request);
        let navigationExtras: NavigationExtras = {
            queryParams: { "searchId": this.request.id }
            //fragment: "anchor"
        };
        //let link = ["/hotels", this.request.id];
        this.router.navigate(["/list"], navigationExtras);
    }
}