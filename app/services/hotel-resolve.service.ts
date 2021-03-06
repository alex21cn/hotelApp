﻿import { Injectable }     from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable }         from "rxjs/Observable";
import { HotelService } from "./hotel.service";
import { Hotel } from "../models/hotel.class";
import {City}  from "../models/city.interface";

@Injectable()
export class HotelResolveService implements Resolve<Hotel|boolean>{
    constructor(private router: Router, private service: HotelService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Hotel|boolean> {
        let id = + route.params["id"];
        return this.service.getHotelDetail(id).map(hotel => {
            if (hotel) {
                return hotel;
            } else {
                this.router.navigate(["/hotels"]);
                return false;
            }
        });
    }
}