import { Component,Output,EventEmitter } from '@angular/core';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
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
  selector: 'app-bookitem',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './bookitem.component.html',
  styleUrl: './bookitem.component.css'
})
export class BookitemComponent {
  books: Book[] = [];
  
  isVisible = false;
  newBook: Book = { id:0,title: '', author: '', price: 0, rating: 0,publication_year:0, image_url:'' };

  @Output() bookAdded= new EventEmitter<Book>();

  constructor(private bookService: BookService) {}

  openPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }

  addBook() {
    this.bookService.addBook(this.newBook).subscribe(() => {
      this.bookAdded.emit(this.newBook);
      this.closePopup();
      
    });
  }

}
