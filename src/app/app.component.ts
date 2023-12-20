import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Wishlist } from '../models/Wishlist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wishlists-app';

  wishlists: Array<Wishlist> = [
    new Wishlist(1, 'Learn Laravel Inertia', true),
    new Wishlist(2, 'Learn Cypress', false),
    new Wishlist(3, 'Learn Next.js', false),
  ]
}
