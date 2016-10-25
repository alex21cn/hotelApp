import { Injectable }     from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { HotelService } from "./hotel.service";
import { Hotel } from "../classes/hotel.class";
import {City}  from "../classes/city.class";

@Injectable()
export class HotelResolveService implements Resolve<Hotel>{
    constructor(private router: Router, private service: HotelService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Hotel> | boolean {
        let id = + route.params["id"];
        return this.service.getHotelDetail(id).then(hotel => {
            if (hotel) {
                return hotel;
            } else {
                this.router.navigate(["/hotels"]);
                return false;
            }
        });
    }
}