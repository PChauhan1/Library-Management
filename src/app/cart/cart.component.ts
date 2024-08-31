import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from '../checkout/checkout.component';

interface Book {
  id: number;
  title: string;
  author: string;
  publication_year: number;
  image_url: string;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet,RouterModule,CheckoutComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Book[] = [];
  isPaymentVisible = false; // Control the visibility of the payment popup

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  // Method to show the payment popup
  showPayment() {
    this.isPaymentVisible = true;
  }

  // Method to close the payment popup
  closePayment() {
    this.isPaymentVisible = false;
  }

  // Method to handle the checkout process
  checkout() {
    this.showPayment();
  }

  // Method to calculate total payment amount
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

}