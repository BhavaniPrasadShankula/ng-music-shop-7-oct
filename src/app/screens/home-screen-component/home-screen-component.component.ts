import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'ms-home-screen-component',
  templateUrl: './home-screen-component.component.html',
  styleUrls: ['./home-screen-component.component.scss']
})
export class HomeScreenComponentComponent implements OnInit {
  constructor(private _albums: AlbumsService) {

  }
  
  ngOnInit(): void {
    this._albums.getTopAlbums()
  }

  topAlbumHeading: string = "Top Albums";
  latestAlbumHeading: string = "Latest Albums";
  bollywoodAlbumHeading: string = "Bollywood Albums";

  albums$ = this._albums.topAlbums$;

}
