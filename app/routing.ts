import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HotelSearchComponent }   from "./components/hotel-search.component";
import { HotelListComponent }  from "./components/hotel-list.component";
import { HotelDetailComponent }  from "./components/hotel-detail.component";
import { HotelResolveService } from "./services/hotel-resolve.service";
import { HotelsResolveService } from "./services/hotels-resolve.service";

const appRoutes: Routes = [
    //{
    //    path: '**',
    //    component: HotelSearchComponent,
    //    outlet: 'search'
    //},
    {
        path: "",
        redirectTo: "index",
        pathMatch: "full"
    },
    {
        path: "index",
        //redirectTo: "search",
        component: HotelSearchComponent,
        pathMatch: "full"
    },
    {
        path: "search",
        component: HotelSearchComponent
    },
    {
        path: "detail/:id",
        component: HotelDetailComponent,
        resolve: { hotel: HotelResolveService }
    },
    {
        path: "list",
        component: HotelListComponent,
        resolve: { hotels: HotelsResolveService }
    }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
