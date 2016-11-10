import { Component, Input, Output, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Location }               from "@angular/common";
import { Observable }         from "rxjs/Observable";
import "rxjs/add/operator/map";
import { HotelService } from "../services/hotel.service";
import { UserService } from "../services/user.service";
import {SearchRequest} from "../models/search-request.class";
import { Hotel } from "../models/hotel.class";

@Component({
    selector: "hotel-list",
    inputs: ["request"],
    moduleId: module.id,
    templateUrl: "../templates/hotel-list.template.html",
    //providers: [HotelService]
})
export class HotelListComponent implements OnInit {
    private searchId: Observable<number>;
    private hotels: Hotel[] = [];
    private selectedHotel: Hotel;
    constructor(private location: Location,private router: Router, private route: ActivatedRoute, private service: HotelService, private user: UserService) {
    }

    ngOnInit(): void {
        ////this.searchId = this.route.queryParams.map(params => <number>params["searchId"] || 0);
        ////this.searchId = this.route.queryParams["value"]["searchId"];   

        this.route.queryParams.map(params => params["searchId"]).subscribe(id => this.searchId = id);
        //this.service.getHotels(this.user.searches[0]).then(
        //    hotels => this.hotels = hotels
        //);
        this.hotels = this.route.snapshot.data["hotels"];
        if (!this.hotels) this.router.navigate(["/index"]);
    }

    selectHotel(hotel: Hotel): void {
        this.selectedHotel = hotel;
    }

    goBack(): void {
        this.location.back();
    }

    gotoDetail() {
        if (!this.selectedHotel) return;
        let link = ["/detail", this.selectedHotel.id];
        this.router.navigate(link, { queryParams: { "searchId": this.searchId } });
    }
}