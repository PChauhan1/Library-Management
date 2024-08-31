import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


interface Book {
  id: number;
  title: string;
  author: string;
  publication_year: number;
  image_url:string;
  price:number;
  rating:number;
  
  
}
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,CartComponent,RouterModule,RouterOutlet,FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cart: Book[] = [];
  name: string | undefined ;
  cardNumber: number | undefined;
  expiryDate: number | undefined;
  securityCode: number | undefined;
  zipCode: number | undefined;
  paymentForm: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.cart = navigation.extras.state['cart'];
    }
  }

  getTotal(): number {
    return this.cart.reduce((acc, book) => acc + book.price, 0);
  }

  validateExpiryDate(): void {
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!regex.test((this.expiryDate || '').toString())) {
      alert('Expiry date must be in MM/YY format.');
      this.expiryDate = undefined;
    }
  }
  pay(): void {
    if (this.paymentForm.valid) {
      // Display a success message to the user
      alert('Payment successful!');

      // Clear the cart
      this.cart = [];

      // Navigate back to book list
      this.router.navigate(['/books']);
    } else {
      alert('Please fill in all the required fields!');
    }
  }

  cancel(): void {
    this.router.navigate(['/books']);
  }
}


