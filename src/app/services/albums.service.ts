import { Injectable } from '@angular/core';
import { Album } from '../interfaces/Album';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private topAlbums: BehaviorSubject<Album[]> = new BehaviorSubject<Album[]>(
    []
  );

  private latestAlbums: BehaviorSubject<Album[]> = new BehaviorSubject<Album[]>(
    []
  );

  private bollywoodAlbums: BehaviorSubject<Album[]> = new BehaviorSubject<
    Album[]
  >([]);

  topAlbums$ = this.topAlbums.asObservable();
  latestAlbums$ = this.latestAlbums.asObservable();
  bollywoodAlbums$ = this.bollywoodAlbums.asObservable();

  constructor(private _http: HttpClient) {}

  getTopAlbums() {
    this._http.get<Album[]>('http://localhost:3000/top-albums').subscribe({
      next: (response) => {
        this.topAlbums.next(response);
      },
      error: () => {
        this.topAlbums.next([]);
        // alert("Top albums cannot be loaded.")
      },
    });
  }

  getLatestAlbums() {
    this._http.get<Album[]>('http://localhost:3000/latest-albums').subscribe({
      next: (response) => {
        this.latestAlbums.next(response);
      },
      error: () => {
        this.latestAlbums.next([]);
        // alert("Top albums cannot be loaded.")
      },
    });
  }

  getBollywoodAlbums() {
    this._http
      .get<Album[]>('http://localhost:3000/bollywood-albums')
      .subscribe({
        next: (response) => {
          // 200
          this.bollywoodAlbums.next(response);
        },
        error: () => {
          this.bollywoodAlbums.next([]);
          // 400 500
          // alert("Top albums cannot be loaded.")
        },
      });
  }

  addNewAlbum(album: Partial<Album>) {
    return this._http.post('http://localhost:3000/top-albums', album);
  }
}
