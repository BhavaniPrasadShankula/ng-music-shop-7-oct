import { Component } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'ms-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent {
  constructor(private _albums: AlbumsService) {}

  ngOnInit(): void {
    this._albums.getTopAlbums();
    this._albums.getBollywoodAlbums();
    this._albums.getLatestAlbums();
  }

  topAlbumHeading: string = 'Top Albums';
  latestAlbumHeading: string = 'Latest Albums';
  bollywoodAlbumHeading: string = 'Bollywood Albums';

  topAlbums$ = this._albums.topAlbums$;
  latestAlbums$ = this._albums.latestAlbums$;
  bollywoodAlbums$ = this._albums.bollywoodAlbums$;
}
