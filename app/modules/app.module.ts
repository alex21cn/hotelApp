import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule  }   from "@angular/forms";
import { HttpModule }    from "@angular/http";
import "rxjs/Rx";
import { MaterialModule } from "@angular/material";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from "angular-2-local-storage";
import { Ng2CompleterModule } from "ng2-completer";

import { MockHotelService }  from "../../mock/mock-hotel.service";

import { routing, appRoutingProviders } from "../routing";
import { AppComponent }  from "../components/app.component";
import { HotelSearchComponent } from "../components/hotel-search.component"
import { HotelListComponent  } from "../components/hotel-list.component"
import { HotelDetailComponent  } from "../components/hotel-detail.component"
import { HotelService } from "../services/hotel.service"
import { UserService } from "../services/user.service"
import { HotelResolveService } from "../services/hotel-resolve.service";
import { HotelsResolveService } from "../services/hotels-resolve.service";

let localStorageServiceConfig = {
    prefix: "hotel_app",
    storageType: "localStorage"
};

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        appRoutingProviders,
        MaterialModule.forRoot(),
        InMemoryWebApiModule.forRoot(MockHotelService, { delay: 100 }),
        Ng2CompleterModule
    ],
    declarations: [
        AppComponent,
        HotelSearchComponent,
        HotelListComponent,
        HotelDetailComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        LocalStorageService,
        {
            provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
        },
        UserService,
        HotelService,
        HotelResolveService,
        HotelsResolveService
    ]
})
export class AppModule { }
