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
import { ModelComponent } from './shared/model/model.component';
import { CounterComponent } from './shared/counter/counter.component';
import { AchivementComponent } from './shared/achivement/achivement.component';
import { TestimonialComponent } from './shared/testimonial/testimonial.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SecutiryComponent } from './secutiry/secutiry.component';
import { NgScrollIndicatorModule } from 'ngx-scroll-indicator';

import { ScrollToModule } from 'ng2-scroll-to-el';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Slider1Component,
    HeaderComponent,
    AboutUsComponent,
    FeatureComponent,
    WhyChooseUsComponent,
    ModelComponent,
    CounterComponent,
    AchivementComponent,
    TestimonialComponent,
    FooterComponent,
    SecutiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,MatIconModule,NgScrollIndicatorModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
