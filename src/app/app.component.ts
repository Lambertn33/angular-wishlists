import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Wishlist } from '../models/Wishlist';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishComponent } from './add-wish/add-wish.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent, AddWishComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wishlists-app';

  
  selectedFilter = '1';

  wishlists: Array<Wishlist> = [
    new Wishlist(1, 'Learn Angular', false),
    new Wishlist(2, 'Learn React', true),
    new Wishlist(3, 'Learn Vue', true),
  ];
  
  get visibleWishlists(): Wishlist[] {
    let value = this.selectedFilter;
    if (value == '1') {
      return  this.wishlists;
    } else if (value == '2') {
      return  this.wishlists.filter(wishlist => wishlist.isCompleted);
    } else {
      return  this.wishlists.filter(wishlist => !wishlist.isCompleted);
    }
  }
  
  addNewWish(newWish: Wishlist) {
    this.wishlists.push(newWish);
  }
}
