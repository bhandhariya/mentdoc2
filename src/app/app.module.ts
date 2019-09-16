import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TestimonialComponent } from './shared/testimonial/testimonial.component';
import { HeaderComponent } from './shared/header/header.component';
import { ChooseusComponent } from './shared/chooseus/chooseus.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { SliderComponent } from './shared/slider/slider.component';
import { FeaturesComponent } from './shared/features/features.component';
import { ModalsComponent } from './shared/modals/modals.component';
import { AchievmentsComponent } from './shared/achievments/achievments.component';
import { FooterComponent } from './shared/footer/footer.component';
import{SecurityComponent} from './security/security.component';
import {SHeaderComponent} from './security/shared/s-header/s-header.component';
import {SBannerComponent} from './security/shared/s-banner/s-banner.component';
import {SDataMixComponent} from './security/shared/s-data-mix/s-data-mix.component';
import {SFeatureComponent} from './security/shared/s-feature/s-feature.component';
import {SAlgoComponent} from './security/shared/s-algo/s-algo.component';
import {SSecureComponent} from './security/shared/s-secure/s-secure.component';
import { DownloadComponent } from './download/download.component';
import {FirstComponent} from './download/shared/first/first.component';
import {SecondComponent} from './download/shared/second/second.component';
import {ThirdComponent} from './download/shared/third/third.component';
import {FourthComponent} from './download/shared/fourth/fourth.component';
import {FifthComponent} from './download/shared/fifth/fifth.component';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import{ServiceComponent} from './service/service.component';
import {BlogComponent} from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TestimonialComponent,
    HeaderComponent,
    ChooseusComponent,
    GalleryComponent,
    AboutusComponent,
    SliderComponent,
    FeaturesComponent,
    ModalsComponent,
    AchievmentsComponent,
    FooterComponent,
    SecurityComponent,
    SHeaderComponent,
    SBannerComponent,
    SDataMixComponent,
    SFeatureComponent,
    SAlgoComponent,
    SSecureComponent,
    DownloadComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
 
    ContactComponent,
    AboutComponent,
    ServiceComponent,
    BlogComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
