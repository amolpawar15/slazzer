import { Component, OnInit } from "@angular/core";
@Component({
    selector: "bgimage",
    templateUrl: "./bgimage.component.html",
    styleUrls: ['./bgimage.component.css']
})


export class BgimageComponent {
    expendImageArrow = true;
    currentTab = 1;

    onChangeArrow() {
        this.expendImageArrow = !this.expendImageArrow;
    }

    showTabs(tab) {
        this.currentTab = tab;
    }

}






