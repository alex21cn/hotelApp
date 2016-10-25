import { Component, OnInit } from "@angular/core";

@Component({
    selector: "hotel-app",
    moduleId: module.id,
    //template: require("templates/app.template.html"),
    templateUrl: "../templates/app.template.html",
    styleUrls: ["../../asset/css/app.theme.css","../../asset/css/app.component.css"]
})


export class AppComponent {
    year = "2016";
    applicationName = "Airliners";
}

