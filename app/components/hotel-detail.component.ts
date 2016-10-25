import { Component, Input, Output, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Location }               from "@angular/common";
import { Observable }         from "rxjs/Observable";
import { HotelService } from "../services/hotel.service";
import {SearchRequest} from "../classes/search-request.class";
import { Hotel } from "../classes/hotel.class";

@Component({
    selector: "hotel-detail",
    moduleId: module.id,
    templateUrl: "../templates/hotel-detail.template.html",
    //providers: [HotelService]
})
export class HotelDetailComponent implements OnInit {
    private searchId: Observable<number>;
    private hotel: Hotel;
    request: SearchRequest;
    constructor(private location: Location, private route: ActivatedRoute, private router: Router, private service: HotelService) {
    }

    ngOnInit(): void {
        this.route.queryParams.map(params => params["searchId"]).subscribe(id => this.searchId = id);
        this.hotel = this.route.snapshot.data["hotel"];
        if (!this.hotel) this.router.navigate(["/list"]);
        // this.route.data.forEach((data: { hotel: Hotel }) => {
        //     this.hotel = data.hotel;
        // });
        ////let id = +this.route.snapshot.params["id"];
        // this.route.params.forEach((params: Params) => {
        //     let id = +params["id"]; // (+) converts string "id" to a number
        //     this.service.getHotel(id).then(
        //         hotel => this.hotel = hotel
        //         );
        // });        
    }

    goBack(): void {
        this.location.back();
    }

}