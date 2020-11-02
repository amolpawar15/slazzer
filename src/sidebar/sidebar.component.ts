import { Component, OnInit } from "@angular/core";
import { CommonService } from "../_services/index";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
    selector: "sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent {
    popularlist: any = [];

    // optionsToggle = false;
    expendEditer = false;

    currentPanel = 1;
    bgImagesComponent = true;
    constructor(private commonService: CommonService) { };

    ngOnInit() {
        this.getMostPopularList();
      
    }

    undoSetting() {
        this.bgImagesComponent = true;
    }
    redoSetting(){
        this.bgImagesComponent = false;
    }

    showPanel(panel) {
        this.currentPanel = panel;
    }

    onChangeArrow() {
        this.expendEditer = !this.expendEditer;
        // this.currentPanel = 0;
        this.currentPanel = 1;

    }

    toggleExtendedSideBar() {
        this.currentPanel = 0;
    }

    getMostPopularList() {
        let tempObj = this.commonService.loadPopularList();
        tempObj.subscribe((data: any) => {
            this.popularlist = data.mostPopularData;
        });

    }

}