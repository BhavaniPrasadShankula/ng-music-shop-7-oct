import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { AlbumListingComponent } from './components/album-listing/album-listing.component';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { HomeScreenComponentComponent } from './screens/home-screen-component/home-screen-component.component';
import { AddAlbumComponent } from './screens/add-album/add-album.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainBannerComponent,
    AlbumCardComponent,
    AlbumListingComponent,
    HomeScreenComponentComponent,
    AddAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
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
