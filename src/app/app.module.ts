import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityComponent } from './security/security.component';
import { SHeaderComponent } from './security/shared/s-header/s-header.component';
import { SBannerComponent } from './security/shared/s-banner/s-banner.component';
import { SDataMixComponent } from './security/shared/s-data-mix/s-data-mix.component';


@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    SHeaderComponent,
    SBannerComponent,
    SDataMixComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
