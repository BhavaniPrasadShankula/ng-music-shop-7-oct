import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

// Template Driven - FormsModule
// Reactive Forms - Reactive Module
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { AlbumListingComponent } from './components/album-listing/album-listing.component';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AdminAddAlbumScreenComponent } from './screens/admin-add-album-screen/admin-add-album-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainBannerComponent,
    AlbumCardComponent,
    AlbumListingComponent,
    HomeScreenComponent,
    AdminAddAlbumScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE, useValue: "INR"
    },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'mediumDate' }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
