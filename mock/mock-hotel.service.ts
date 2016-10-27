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
        ]
        };
        let hotel = {
            "code": 1,
            "name": {
                "languageCode": "[language]",
                "content": "Villa Dorada"
            },
            "description": {
                "languageCode": "ENG",
                "content":
                "This hotel is located about 150 metres from the fine sandy beach. The lively centre of Cambrils is approximately 10 km away and can be easily reached by the public bus services. There is a stop for public transport right in front of the hotel. The immediate vicinity offers a diverse range of shopping and entertainment facilities including boutiques, restaurants and bars. This hotel comprises a total of 260 rooms spread over 5 floors. Dining options include a café, a bar and an air-conditioned buffet restaurant with highchairs for infants. The tastefully decorated, cosy rooms come with a balcony and satellite TV."
            },
            "country": {
                "code": "ES",
                "isoCode": "ES",
                "description": {
                    "languageCode": "ENG",
                    "content": "SPAIN  "
                }
            },
            "destination": {
                "code": "SAL",
                "name": {
                    "languageCode": "ENG",
                    "content": "Salou Area / Costa Dorada"
                },
                "countryCode": "ES"
            },
            "zone": {
                "zoneCode": 10,
                "name": "Salou",
                "description": {
                    "languageCode": "ENG",
                    "content": "Salou"
                }
            },
            "coordinates": {
                "longitude": 1.1525289999999999,
                "latitude": 41.068407000000001
            },
            "category": {
                "code": "3EST",
                "description": {
                    "languageCode": "ENG",
                    "content": "3 STARS"
                }
            },
            "categoryGroup": {
                "code": "GRUPO3",
                "description": {
                    "languageCode": "ENG",
                    "content": "Includes 3-star hotels and rural hotels."
                }
            },
            "chain": {
                "code": "OHTEL",
                "description": {
                    "languageCode": "ENG",
                    "content": "OHTELS"
                }
            },
            "accommodationType": {
                "code": "HOTEL",
                "typeMultiDescription": {
                    "languageCode": "ENG",
                    "content": "Hotel"
                },
                "typeDescription": "Hotel"
            },
            "boards": [
                {
                    "code": "BB-E10",
                    "description": {
                        "languageCode": "ENG",
                        "content": "BED AND BREAKFAST"
                    }
                },
                {
                    "code": "HB-E10",
                    "description": {
                        "languageCode": "ENG",
                        "content": "HALF BOARD"
                    }
                },
                {
                    "code": "RO-E10",
                    "description": {
                        "languageCode": "ENG",
                        "content": "ROOM ONLY"
                    }
                },
                {
                    "code": "FB-E10",
                    "description": {
                        "languageCode": "ENG",
                        "content": "FULL BOARD"
                    }
                },
                {
                    "code": "AI-E10",
                    "description": {
                        "languageCode": "ENG",
                        "content": "ALL INCLUSIVE"
                    }
                }
            ],
            "segments": [
                {
                    "code": 34,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Business hotels "
                    }
                },
                {
                    "code": 37,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Beach hotels"
                    }
                },
                {
                    "code": 45,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Sport hotels"
                    }
                }
            ],
            "address": {
                "languageCode": "[language]",
                "content": "VENDRELL,11  "
            },
            "postalCode": "43840",
            "city": {
                "languageCode": "[language]",
                "content": "SALOU"
            },
            "email": "comercial@ohtels.es",
            "license": "HT-000473",
            "phones": [
                {
                    "phoneNumber": "977385511",
                    "phoneType": "PHONEBOOKING"
                },
                {
                    "phoneNumber": "977385511",
                    "phoneType": "PHONEHOTEL"
                },
                {
                    "phoneNumber": "977381754",
                    "phoneType": "PHONEMANAGEMENT"
                },
                {
                    "phoneNumber": "977384612",
                    "phoneType": "FAXNUMBER"
                }
            ],
            "rooms": [
                {
                    "roomCode": "DBT-E10",
                    "description": "Double or Twin",
                    "characteristic": {
                        "code": "MP",
                        "description": {
                            "languageCode": "ENG",
                            "content": "MONOPARENTAL"
                        }
                    },
                    "roomStays": [
                        {
                            "stayType": "BED",
                            "order": "1",
                            "description": "Bed room"
                        }
                    ]
                },
                {
                    "roomCode": "SGL-E10",
                    "description": "SINGLE",
                    "characteristic": {
                        "code": "ST",
                        "description": {
                            "languageCode": "ENG",
                            "content": "STANDARD"
                        }
                    },
                    "roomStays": [
                        {
                            "stayType": "BED",
                            "order": "1",
                            "description": "Bed room"
                        }
                    ]
                },
                {
                    "roomCode": "DBT-E10",
                    "description": "Double or Twin",
                    "characteristic": {
                        "code": "ST",
                        "description": {
                            "languageCode": "ENG",
                            "content": "STANDARD"
                        }
                    },
                    "roomStays": [
                        {
                            "stayType": "BED",
                            "order": "1",
                            "description": "Bed room"
                        }
                    ]
                }
            ],
            "facilities": [
                {
                    "facilityCode": 250,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Wired Internet"
                    },
                    "order": 1,
                    "indFee": false,
                    "indYesOrNo": true
                },
                {
                    "facilityCode": 420,
                    "facilityGroupCode": 74,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Sauna"
                    },
                    "order": 1,
                    "indLogic": true,
                    "indFee": false
                },
                {
                    "facilityCode": 190,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Central heating"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 70,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Lift access"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 200,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Safe"
                    },
                    "order": 1,
                    "indLogic": true,
                    "indFee": false
                },
                {
                    "facilityCode": 261,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Wi-fi"
                    },
                    "order": 1,
                    "indFee": false,
                    "indYesOrNo": true
                },
                {
                    "facilityCode": 130,
                    "facilityGroupCode": 71,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Bar"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 390,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Check-out hour"
                    },
                    "order": 1,
                    "timeFrom": "07:00:00",
                    "timeTo": "10:00:00"
                },
                {
                    "facilityCode": 10,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Bathroom"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 298,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Number of bedrooms"
                    },
                    "order": 1,
                    "indYesOrNo": true,
                    "number": 1
                },
                {
                    "facilityCode": 540,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Large pets allowed (over 5 kg)"
                    },
                    "order": 1,
                    "indFee": false,
                    "indYesOrNo": false
                },
                {
                    "facilityCode": 330,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Garage"
                    },
                    "order": 1,
                    "indFee": false,
                    "indYesOrNo": false
                },
                {
                    "facilityCode": 30,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "24-hour reception"
                    },
                    "order": 1,
                    "indYesOrNo": true
                },
                {
                    "facilityCode": 575,
                    "facilityGroupCode": 71,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Air conditioning in Restaurant"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 193,
                    "facilityGroupCode": 73,
                    "description": {
                        "languageCode": "ENG",
                        "content": "TV lounge"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 535,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Small pets allowed (under 5 kg)"
                    },
                    "order": 1,
                    "indFee": false,
                    "indYesOrNo": false
                },
                {
                    "facilityCode": 20,
                    "facilityGroupCode": 40,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Nearest Bus / Metro Stop"
                    },
                    "order": 1,
                    "distance": 15000
                },
                {
                    "facilityCode": 320,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Car park"
                    },
                    "order": 1,
                    "indFee": false,
                    "indYesOrNo": false
                },
                {
                    "facilityCode": 56,
                    "facilityGroupCode": 10,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Connecting rooms"
                    },
                    "order": 1,
                    "indYesOrNo": false
                },
                {
                    "facilityCode": 295,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Wheelchair-accessible"
                    },
                    "order": 1,
                    "indYesOrNo": false
                },
                {
                    "facilityCode": 55,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "TV"
                    },
                    "order": 1,
                    "indLogic": true,
                    "indFee": false
                },
                {
                    "facilityCode": 10,
                    "facilityGroupCode": 40,
                    "description": {
                        "languageCode": "ENG",
                        "content": "City centre"
                    },
                    "order": 1,
                    "distance": 300
                },
                {
                    "facilityCode": 287,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Smoking rooms"
                    },
                    "order": 1,
                    "indYesOrNo": false
                },
                {
                    "facilityCode": 125,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Garden"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 30,
                    "facilityGroupCode": 80,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Breakfast buffet"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 275,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Extra beds on demand"
                    },
                    "order": 1,
                    "indFee": false,
                    "indYesOrNo": false
                },
                {
                    "facilityCode": 90,
                    "facilityGroupCode": 90,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Aqua fit"
                    },
                    "order": 1,
                    "indLogic": true,
                    "indFee": false
                },
                {
                    "facilityCode": 60,
                    "facilityGroupCode": 30,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Visa"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 50,
                    "facilityGroupCode": 30,
                    "description": {
                        "languageCode": "ENG",
                        "content": "MasterCard"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 50,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Currency exchange facilities"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 100,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Internet access"
                    },
                    "order": 1,
                    "indFee": false,
                    "indYesOrNo": false
                },
                {
                    "facilityCode": 270,
                    "facilityGroupCode": 90,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Squash"
                    },
                    "order": 1,
                    "indLogic": true,
                    "indFee": false
                },
                {
                    "facilityCode": 395,
                    "facilityGroupCode": 73,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Sun loungers"
                    },
                    "order": 1,
                    "indLogic": true,
                    "indFee": false
                },
                {
                    "facilityCode": 400,
                    "facilityGroupCode": 73,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Parasols"
                    },
                    "order": 1,
                    "indLogic": true,
                    "indFee": false
                },
                {
                    "facilityCode": 10,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Air conditioning in public areas"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 555,
                    "facilityGroupCode": 71,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Poolside snack bar"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 250,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Wheelchair-accessible"
                    },
                    "order": 1,
                    "indYesOrNo": false
                },
                {
                    "facilityCode": 260,
                    "facilityGroupCode": 90,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Table tennis"
                    },
                    "order": 1,
                    "indLogic": true,
                    "indFee": false
                },
                {
                    "facilityCode": 40,
                    "facilityGroupCode": 40,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Beach"
                    },
                    "order": 1,
                    "distance": 150
                },
                {
                    "facilityCode": 150,
                    "facilityGroupCode": 73,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Nightclub"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 401,
                    "facilityGroupCode": 73,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Entertainment programme for adults"
                    },
                    "order": 1,
                    "indLogic": true,
                    "indFee": false
                },
                {
                    "facilityCode": 145,
                    "facilityGroupCode": 40,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Bus/Train station"
                    },
                    "order": 1,
                    "distance": 1000
                },
                {
                    "facilityCode": 350,
                    "facilityGroupCode": 90,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Billiards"
                    },
                    "order": 1,
                    "indLogic": true,
                    "indFee": false
                },
                {
                    "facilityCode": 295,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Room size (sqm)"
                    },
                    "order": 1,
                    "indYesOrNo": true,
                    "number": 12
                },
                {
                    "facilityCode": 50,
                    "facilityGroupCode": 10,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Number of floors (main building)"
                    },
                    "order": 1,
                    "number": 5
                },
                {
                    "facilityCode": 264,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Cot on demand"
                    },
                    "order": 1,
                    "indFee": false,
                    "indYesOrNo": false
                },
                {
                    "facilityCode": 210,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Key Collection"
                    },
                    "order": 1,
                    "timeFrom": "14:00:00",
                    "timeTo": "00:00:00"
                },
                {
                    "facilityCode": 290,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Medical service"
                    },
                    "order": 1,
                    "indLogic": true,
                    "indFee": false
                },
                {
                    "facilityCode": 240,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Mobile phone coverage"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 90,
                    "facilityGroupCode": 10,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Double rooms"
                    },
                    "order": 1,
                    "number": 250
                },
                {
                    "facilityCode": 550,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Wi-fi"
                    },
                    "order": 1,
                    "indFee": false,
                    "indYesOrNo": true
                },
                {
                    "facilityCode": 170,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Centrally regulated air conditioning"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 260,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Disability-friendly bathroom"
                    },
                    "order": 1,
                    "indYesOrNo": true
                },
                {
                    "facilityCode": 95,
                    "facilityGroupCode": 10,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Junior suites"
                    },
                    "order": 1,
                    "number": 10
                },
                {
                    "facilityCode": 20,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Shower"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 230,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Balcony"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 260,
                    "facilityGroupCode": 70,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Check-in hour"
                    },
                    "order": 1,
                    "timeFrom": "14:00:00",
                    "timeTo": "00:00:00"
                },
                {
                    "facilityCode": 50,
                    "facilityGroupCode": 80,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Buffet lunch"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 405,
                    "facilityGroupCode": 73,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Entertainment programme for children"
                    },
                    "order": 1,
                    "indLogic": true,
                    "indFee": false
                },
                {
                    "facilityCode": 240,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Terrace"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 30,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Bathtub"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 80,
                    "facilityGroupCode": 71,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Café"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 220,
                    "facilityGroupCode": 60,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Living room"
                    },
                    "order": 1,
                    "indYesOrNo": false
                },
                {
                    "facilityCode": 70,
                    "facilityGroupCode": 10,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Total number of rooms"
                    },
                    "order": 1,
                    "indYesOrNo": false,
                    "number": 260
                },
                {
                    "facilityCode": 130,
                    "facilityGroupCode": 40,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Golf course"
                    },
                    "order": 1,
                    "distance": 5000
                },
                {
                    "facilityCode": 220,
                    "facilityGroupCode": 71,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Non-smoking area"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 350,
                    "facilityGroupCode": 73,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Children playground"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 10,
                    "facilityGroupCode": 20,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Hotel"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 230,
                    "facilityGroupCode": 71,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Highchairs"
                    },
                    "order": 1,
                    "indLogic": true
                },
                {
                    "facilityCode": 80,
                    "facilityGroupCode": 80,
                    "description": {
                        "languageCode": "ENG",
                        "content": "Buffet dinner"
                    },
                    "order": 1,
                    "indLogic": true
                }
            ],
            "terminals": [
                {
                    "terminalCode": "REU",
                    "terminalType": "A",
                    "distance": 15,
                    "name": {
                        "languageCode": "ENG",
                        "content": "Tarragona, Reus Airport"
                    },
                    "description": {
                        "languageCode": "ENG",
                        "content": "Airport"
                    }
                },
                {
                    "terminalCode": "BCN",
                    "terminalType": "A",
                    "distance": 110,
                    "name": {
                        "languageCode": "ENG",
                        "content": "Barcelona, El Prat Airport"
                    },
                    "description": {
                        "languageCode": "ENG",
                        "content": "Airport"
                    }
                }
            ],
            "interestPoints": [
                {
                    "facilityCode": 20,
                    "facilityGroupCode": 100,
                    "order": 1,
                    "poiName": "Salou",
                    "distance": "300"
                },
                {
                    "facilityCode": 40,
                    "facilityGroupCode": 100,
                    "order": 1,
                    "poiName": "Barcelona",
                    "distance": "100000"
                },
                {
                    "facilityCode": 10,
                    "facilityGroupCode": 100,
                    "order": 1,
                    "poiName": "Cambrils",
                    "distance": "10000"
                },
                {
                    "facilityCode": 50,
                    "facilityGroupCode": 100,
                    "order": 1,
                    "poiName": "reus",
                    "distance": "15000"
                },
                {
                    "facilityCode": 30,
                    "facilityGroupCode": 100,
                    "order": 1,
                    "poiName": "Port Aventura",
                    "distance": "3000"
                }
            ],
            "images": [
                {
                    "type": {
                        "code": "RES",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Restaurant"
                        }
                    },
                    "path": "00/000001/000001a_hb_r_001.jpg",
                    "order": 1
                },
                {
                    "type": {
                        "code": "PLA",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Beach"
                        }
                    },
                    "path": "00/000001/000001a_hb_s_002.jpg",
                    "order": 2
                },
                {
                    "type": {
                        "code": "RES",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Restaurant"
                        }
                    },
                    "path": "00/000001/000001a_hb_r_002.jpg",
                    "order": 2
                },
                {
                    "type": {
                        "code": "PLA",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Beach"
                        }
                    },
                    "path": "00/000001/000001a_hb_s_001.jpg",
                    "order": 1
                },
                {
                    "type": {
                        "code": "DEP",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Sports and Entertainment"
                        }
                    },
                    "path": "00/000001/000001a_hb_f_002.jpg",
                    "order": 2
                },
                {
                    "type": {
                        "code": "DEP",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Sports and Entertainment"
                        }
                    },
                    "path": "00/000001/000001a_hb_f_003.jpg",
                    "order": 3
                },
                {
                    "type": {
                        "code": "DEP",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Sports and Entertainment"
                        }
                    },
                    "path": "00/000001/000001a_hb_f_001.jpg",
                    "order": 1
                },
                {
                    "type": {
                        "code": "COM",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Lobby"
                        }
                    },
                    "path": "00/000001/000001a_hb_l_001.jpg",
                    "order": 1
                },
                {
                    "type": {
                        "code": "PIS",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Pool"
                        }
                    },
                    "path": "00/000001/000001a_hb_p_002.jpg",
                    "order": 2
                },
                {
                    "type": {
                        "code": "PIS",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Pool"
                        }
                    },
                    "path": "00/000001/000001a_hb_p_001.jpg",
                    "order": 1
                },
                {
                    "type": {
                        "code": "HAB",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Room"
                        }
                    },
                    "path": "00/000001/000001a_hb_ro_001.jpg",
                    "roomCode": "SGL-E10",
                    "roomType": "SGL",
                    "characteristicCode": "ST",
                    "order": 1
                },
                {
                    "type": {
                        "code": "HAB",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Room"
                        }
                    },
                    "path": "00/000001/000001a_hb_w_001.jpg",
                    "order": 1
                },
                {
                    "type": {
                        "code": "HAB",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Room"
                        }
                    },
                    "path": "00/000001/000001a_hb_w_003.jpg",
                    "order": 3
                },
                {
                    "type": {
                        "code": "HAB",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Room"
                        }
                    },
                    "path": "00/000001/000001a_hb_w_002.jpg",
                    "order": 2
                },
                {
                    "type": {
                        "code": "GEN",
                        "description": {
                            "languageCode": "ENG",
                            "content": "General view"
                        }
                    },
                    "path": "00/000001/000001a_hb_a_002.jpg",
                    "order": 2
                },
                {
                    "type": {
                        "code": "GEN",
                        "description": {
                            "languageCode": "ENG",
                            "content": "General view"
                        }
                    },
                    "path": "00/000001/000001a_hb_a_001.jpg",
                    "order": 1
                },
                {
                    "type": {
                        "code": "HAB",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Room"
                        }
                    },
                    "path": "00/000001/000001a_hb_ro_003.jpg",
                    "roomCode": "DBT-E10",
                    "roomType": "DBT",
                    "characteristicCode": "ST",
                    "order": 3
                },
                {
                    "type": {
                        "code": "GEN",
                        "description": {
                            "languageCode": "ENG",
                            "content": "General view"
                        }
                    },
                    "path": "00/000001/000001a_hb_a_004.jpg",
                    "order": 4
                },
                {
                    "type": {
                        "code": "GEN",
                        "description": {
                            "languageCode": "ENG",
                            "content": "General view"
                        }
                    },
                    "path": "00/000001/000001a_hb_a_003.jpg",
                    "order": 3
                },
                {
                    "type": {
                        "code": "HAB",
                        "description": {
                            "languageCode": "ENG",
                            "content": "Room"
                        }
                    },
                    "path": "00/000001/000001a_hb_ro_002.jpg",
                    "roomCode": "DBT-E10",
                    "roomType": "DBT",
                    "characteristicCode": "MP",
                    "order": 2
                }
            ],
            "web": "http://www.ohtels.es/",
            "S2C": "C"
        };
        return { "cities": cities, "hotels": hotels, "detail": hotel };
    }
}