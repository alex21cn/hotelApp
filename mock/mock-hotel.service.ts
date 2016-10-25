import { City } from "../app/classes/city.class";
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockHotelService implements InMemoryDbService {
    createDb() {
        let cities = [
            { name: "Toronto", airportCode: "YYZ", country: "Canada", latitude: 0, longitude: 0 },
            { name: "Owatta", airportCode: "YOW", country: "Canada", latitude: 0, longitude: 0 },
            { name: "Montreal", airportCode: "YYZ", country: "Canada", latitude: 0, longitude: 0 },
            { name: "Vancouver", airportCode: "YYZ", country: "Canada", latitude: 0, longitude: 0 },
            { name: "New York", airportCode: "YYZ", country: "United States", latitude: 0, longitude: 0 },
            { name: "Washington D.C", airportCode: "YYZ", country: "United States", latitude: 0, longitude: 0 },
            { name: "Chicago", airportCode: "YYZ", country: "United States", latitude: 0, longitude: 0 },
            { name: "Detroit", airportCode: "YYZ", country: "United States", latitude: 0, longitude: 0 },
            { name: "Dallas", airportCode: "YYZ", country: "United States", latitude: 0, longitude: 0 },
            { name: "Paris", airportCode: "YYZ", country: "France", latitude: 0, longitude: 0 }
        ];
        let hotels = {hotels: [
            { id: 1, name: "Four Season", starrate: 4, description: "Four Season", address: "abc street, city", price: 123.69, image: ""},
            { id: 2, name: "FairMount", starrate: 5, description: "FairMount", address: "abc street, city", price: 560.00, image: ""}
        ]};        
        return {"cities": cities, "hotels": hotels};
    }
}