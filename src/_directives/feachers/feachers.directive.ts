import { Directive, Component, Output, Input, EventEmitter, ElementRef } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import { Observable } from 'rxjs/Rx';
export interface feacher {
  operation: any;
}
@Directive({
  selector: '[feachers]'
})

export class FeachersDirective {

  @Input('feachers') feachers: string;
  settings = {
    backgroundImage: true,
    backgroundColor: true,
    narrtion: true,
    addBlur: true,
    saturationEffects: true,
    artsyOptions: true,
    addSymbols: true,


  }

  constructor(private el: ElementRef) { }

  ngOnInit() {

    if (this.settings[this.feachers]) {
      // console.log("dkfdfl",this)
      this.el.nativeElement.style.display = 'block ';

    } else {
      this.el.nativeElement.style.display = 'none';
    }
  }


}