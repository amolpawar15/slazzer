import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';

import { SidebarComponent } from '../sidebar/index';
import { BgimageComponent } from '../bgimage/index';
import { BgcolorComponent } from '../bgcolor/index';
import { TextComponent } from '../text/index';
import { AddblurComponent } from '../addblur/index';
import { SaturationEffectsComponent } from '../saturationeffects/index';
import { ArtsyOptionsComponent } from '../artsyoptions/index';
import { NavbarComponent } from '../navbar/index';
import { FooterComponent } from '../footer/index';
import { AddSymbolComponent } from '../addsymbol/index';

// packages
import { AngularDraggableModule } from 'angular2-draggable';

import {CommonService,SettingService } from '../_services/index';
import { FeachersDirective } from '../_directives/feachers/index';
 
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BgimageComponent,
    BgcolorComponent,
    TextComponent,
    AddblurComponent,
    SaturationEffectsComponent,
    ArtsyOptionsComponent,
    NavbarComponent,
    FooterComponent,
    AddSymbolComponent,
    FeachersDirective,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    AngularDraggableModule

  ],
  providers: [ 
    CommonService,
    SettingService
  ],
  bootstrap: [
    AppComponent,
   
  ]
})
export class AppModule { }
