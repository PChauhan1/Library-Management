import { Component,Output,EventEmitter,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  selector: 'app-bookdetailpopup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './bookdetailpopup.component.html',
  styleUrl: './bookdetailpopup.component.css'
})
export class BookdetailpopupComponent {
  selectedBook: Book[]=[]; // Assuming you have a way to set this book detail

  constructor(private router: Router) {}

  addToCart() {
    this.router.navigate(['/cart'], { state: { book: this.selectedBook } });
  }
  @Input() book!: Book; // Use singular for a single book
  @Output() close = new EventEmitter<void>();

  isVisible = true;

 

  closePopup() {
    this.isVisible = false;
    this.close.emit();
  }
}
