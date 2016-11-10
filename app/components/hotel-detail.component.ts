import { Component, Input, Output, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Location }               from "@angular/common";
import { Observable }         from "rxjs/Observable";
import { HotelService } from "../services/hotel.service";
import {SearchRequest} from "../models/search-request.class";
import { Hotel } from "../models/hotel.class";

@Component({
    selector: "hotel-detail",
    moduleId: module.id,
    templateUrl: "../templates/hotel-detail.template.html",
    //providers: [HotelService]
})
export class HotelDetailComponent implements OnInit {
    private searchId: Observable<number>;
    private hotel: Hotel;
    private slides: Array<any> = [];
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

    private addNewSlide() {
        this.slides.push(
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' }
        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }
    goBack(): void {
        this.location.back();
    }

}