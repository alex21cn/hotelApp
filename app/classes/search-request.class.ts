import {City} from "./city.class"

export class SearchRequest {
    id: number = 0;
    city: City;
    checkInDate: Date;
    checkOutDate: Date;
    rooms: RequestRoom[] = [new RequestRoom()];

    constructor() {
        let date = new Date();
        this.city = { name: "", country: "", airportCode: "" };
        this.checkInDate = new Date(date.setDate(date.getDate() + 1));
        this.checkOutDate = new Date(date.setDate(date.getDate() + 1));
    }
}

export class RequestRoom {
    numberOfAdults: number = 2;
    numberOfChildren: number = 0;
    childAges: number[] = [];
}