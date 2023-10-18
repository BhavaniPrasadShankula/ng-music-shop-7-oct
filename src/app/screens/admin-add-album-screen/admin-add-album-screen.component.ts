import { Component } from '@angular/core';
import { Album } from 'src/app/interfaces/Album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'ms-admin-add-album-screen',
  templateUrl: './admin-add-album-screen.component.html',
  styleUrls: ['./admin-add-album-screen.component.scss'],
})
export class AdminAddAlbumScreenComponent {
  addAlbumData = {
    name: null,
    price: null,
    singers: [""],
  };

  constructor(private _albums: AlbumsService) {}

  addNewAlbum() {
    this._albums.addNewAlbum(this.addAlbumData as any).subscribe((response) => {
      console.log(response);
    });
  }

  updateSingerValue(singer: number, value: any) {
    if (value && value !== undefined) {
      console.log(value.value);
      this.addAlbumData.singers[singer] = value.value;
    }
  }

  addNewSingerToAlbum() {
    this.addAlbumData.singers.push('');
  }
}
