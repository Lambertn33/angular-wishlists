import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wishlist } from '../../models/Wishlist';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  @Input() wishlists: Wishlist[] = [];

  toggleWishlist(wishlist: Wishlist) {
    wishlist.isCompleted = !wishlist.isCompleted;
  }
}
