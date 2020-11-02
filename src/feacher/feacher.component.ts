import { Component, OnInit } from "@angular/core";
import { SettingService } from "../_services/index";
@Component({
    selector: "feacher",
    templateUrl: "./feacher.component.html",
    styleUrls: ['./feacher.component.css']
})


export class FeacherComponent {
    // bgColorComponent =true;
    constructor(private settingService: SettingService) { };
    ngOnInit() {

    }

    undoSetting() {
        // this.bgColorComponent = true;
    }

    redoSetting() {

    }

}