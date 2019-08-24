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
import {MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { ScrollToModule } from 'ng2-scroll-to-el';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderSecComponent } from './secutiry/shared/header-sec/header-sec.component';
import { Security1Component } from './security1/security1.component';
import { Sec1headerComponent } from './security1/sec1header/sec1header.component';
import { Sec1bannerComponent } from './security1/sec1banner/sec1banner.component';
import { Sec1datamixComponent } from './security1/sec1datamix/sec1datamix.component';
import { Sec1featureComponent } from './security1/sec1feature/sec1feature.component';
import { Sec1secureComponent } from './security1/sec1secure/sec1secure.component';
import { Sec1secureplaceComponent } from './security1/sec1secureplace/sec1secureplace.component';
import { Sec1footerComponent } from './security1/sec1footer/sec1footer.component';


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
    SecutiryComponent,
    HeaderSecComponent,
    Security1Component,
    Sec1headerComponent,
    Sec1bannerComponent,
    Sec1datamixComponent,
    Sec1featureComponent,
    Sec1secureComponent,
    Sec1secureplaceComponent,
    Sec1footerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatExpansionModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,
    MatMenuModule,MatIconModule,NgScrollIndicatorModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
