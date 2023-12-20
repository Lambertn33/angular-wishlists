import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Wishlist } from '../models/Wishlist';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wishlists-app';

  newWishlist = {
    text: '',
  };

  wishlists: Array<Wishlist> = [];

  toggleWishlist(wishlist: Wishlist) {
    wishlist.isCompleted = !wishlist.isCompleted;
    console.log(wishlist);
  }

  addNewWish() {
    this.wishlists.push(new Wishlist(4, this.newWishlist.text, false));
    this.newWishlist.text = '';
  }
}
