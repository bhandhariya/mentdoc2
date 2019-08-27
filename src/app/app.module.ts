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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
