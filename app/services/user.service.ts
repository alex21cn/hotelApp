import { Injectable }     from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable }     from "rxjs/Observable";
import { Subject }        from "rxjs/Subject";
import "rxjs/add/operator/toPromise";
import * as _ from "lodash";
import { LocalStorageService } from 'angular-2-local-storage';
import { SearchRequest } from "../models/search-request.class";
import { User } from "../models/user.interface";

@Injectable()
export class UserService {
    private headers = new Headers({ "Accept": "application/json" });
    private hotelBaseUrl = "/api/user/v1.0";
    public user: User;
    //private searches: SearchRequest[] = [];

    constructor(private localStorageService: LocalStorageService) {
        if (!localStorageService.get("user_searchs"))
            localStorageService.set("user_searchs", []);
    }

    setSearch(request: SearchRequest): SearchRequest[] {
        let searches = <SearchRequest[]>this.localStorageService.get("user_searchs");
        searches.unshift(request);
        this.localStorageService.set("user_searchs", searches);
        return searches;
    }

    getSearch(searchId: number): SearchRequest {
        let searches = <SearchRequest[]>this.localStorageService.get("user_searchs");
        let search = <SearchRequest>_.find(searches, s => (s.id === searchId));
        return search;
    }
}