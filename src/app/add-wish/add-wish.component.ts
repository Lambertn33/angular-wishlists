import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Wishlist } from '../../models/Wishlist';

@Component({
  selector: 'add-wish',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish.component.html',
  styleUrl: './add-wish.component.css'
})
export class AddWishComponent {
  @Output() addWish = new EventEmitter<Wishlist>();

  newWishlist = {
    text: '',
  };
  
  addNewWish() {
    this.addWish.emit(new Wishlist(4, this.newWishlist.text, false));
    this.newWishlist.text = '';
  }
}
