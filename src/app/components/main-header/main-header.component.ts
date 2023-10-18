import { Component } from '@angular/core';
import { Album } from 'src/app/interfaces/Album';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'ms-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  cartItems: Album[] = []

  constructor(private _cart: CartService) {
      this.cartItems = _cart.cartItems
  }

  addAlbumLink = "/admin/add-album"


}
