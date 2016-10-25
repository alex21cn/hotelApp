import {enableProdMode} from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./modules/app.module";
import { HotelService } from "./services/hotel.service"
import { UserService } from "./services/user.service"
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule, [UserService, HotelService]);

