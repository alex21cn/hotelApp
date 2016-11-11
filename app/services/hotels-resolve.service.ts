import { Injectable }     from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable }         from "rxjs/Observable";
import { HotelService } from "./hotel.service";
import { UserService } from "./user.service";
import { Hotel } from "../models/hotel.class";
import {SearchRequest} from "../models/search-request.class";

@Injectable()
export class HotelsResolveService implements Resolve<Hotel[]>{
    constructor(private router: Router, private user: UserService, private service: HotelService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Hotel[]> | boolean {
        let searchId = + route.queryParams["searchId"];
        let request = this.user.getSearch(searchId);
        if (!request) return false;
        let hotels = [
            {
                id: 1,
                name: "Four Season",
                starrate: 4,
                description: "Four Season",
                address: "abc street, city",
                price: 123.69,
                image: ""
            },
            {
                id: 2,
                name: "FairMount",
                starrate: 5,
                description: "FairMount",
                address: "abc street, city",
                price: 560.00,
                image: ""
            }
        ];
return Observable.create((o: any) => o.next(hotels));
        // return this.service.getHotels(request).map(hotels => {
        //     if (hotels) {
        //         return hotels;
        //     } else {
        //         this.router.navigate(["/index"]);
        //         return false;
        //     }
        // });
    }
}