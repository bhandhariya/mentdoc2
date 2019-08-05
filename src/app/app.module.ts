import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { Slider1Component } from './shared/slider1/slider1.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { FeatureComponent } from './shared/feature/feature.component';
import { WhyChooseUsComponent } from './shared/why-choose-us/why-choose-us.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Slider1Component,
    HeaderComponent,
    AboutUsComponent,
    FeatureComponent,
    WhyChooseUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
