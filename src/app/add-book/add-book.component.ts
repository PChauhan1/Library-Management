import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  newBook: Book = {
    title: '',
    author: '',
    publishedYear: new Date().getFullYear() // Default to current year
  };

  minYear: number = 1900; // Minimum year
  maxYear: number = new Date().getFullYear(); // Maximum year is the current year

  books: Book[] = [];

  onAddBook() {
    if (this.newBook.title && this.newBook.author && this.newBook.publishedYear) {
      this.books.push({ ...this.newBook });
      this.resetForm();
    }
  }
  onSaveBookDetails() {
    // Logic to save book details (e.g., send to a backend server or save locally)
    console.log('Book details saved!', this.books);
    alert('Book details saved successfully!');
  }

  resetForm() {
    this.newBook = {
      title: '',
      author: '',
      publishedYear: this.maxYear
    };
  }
}