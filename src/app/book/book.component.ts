import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddBookComponent } from '../add-book/add-book.component';
import { Router } from '@angular/router'
import { BookitemComponent } from '../bookitem/bookitem.component';
import { EditbookComponent } from '../editbook/editbook.component';
import { BookdetailpopupComponent } from '../bookdetailpopup/bookdetailpopup.component';

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
  standalone: true,
  imports: [CommonModule,BookdetailpopupComponent,EditbookComponent, RouterModule, RouterOutlet, FormsModule,AddBookComponent,BookitemComponent],
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  filteredBooks: Book[]=[ ];

  searchQuery: string=' ';

  noResults: boolean=false;

  isSearched:boolean=false;


 
  books: Book[] = [];
  selectedBook: Book | null = null; // For editing
  newBook: Book = {
    id: 0,
    title: '',
    author: '',
    publication_year: new Date().getFullYear(),
    image_url: '', // Initialize with an empty string or a placeholder value
    price: 0,  // Initialize with a default value, like 0
    rating: 0  // Initialize with a default value, like 0
  };
  id: number | null = null;  // For storing the input ID
  isEditPopupVisible: boolean = false;
  selectBookDetails:Book| null=null;

  

  constructor(private bookService: BookService , private router: Router) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
 
  }

  editBook(book: Book): void {
    this.selectedBook = { ...book }; // Make a copy to edit
  }


  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId).subscribe(() => {
      this.books = this.books.filter(book => book.id !== bookId);
    });
  }
  

  

  goToBookDetail(id: number): void {
    this.router.navigate(['/book-detail', id]);
  }

  fetchBookById(id:number): void {
    if (this.id !== null) {
      this.bookService.getBook(id).subscribe((book) => {
        this.selectedBook = book;
        this.router.navigate(['/book-details',id]);
      });
    }
    }
    onBookAdded(newBook: Book) {
      this.books.push(newBook); // Add the new book to the list
    }
    openEditPopup(book: Book): void {
      this.selectedBook = { ...book };
      this.isEditPopupVisible = true;
    }
  
    closeEditPopup(): void {
      this.isEditPopupVisible = false;
      this.selectedBook = null;
    }
  
    saveBook(updatedBook: Book): void {
      if (updatedBook) {
        this.bookService.updateBook(updatedBook.id, updatedBook).subscribe(() => {
          this.loadBooks();
          this.closeEditPopup();
        });
      }
    }
   // for open book detail
 
    openBookDetails(book: Book) {
      this.selectBookDetails = book;
    }


closeBookDetailsPopup() {
  this.selectedBook = null;
}

// search




searchBooks(event: Event): void {
  event.preventDefault();

  const query = this.searchQuery.toLowerCase().trim();
  
  if (query) {
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.publication_year.toString().includes(query) ||
      book.price.toString().includes(query)
    );

    this.noResults = this.filteredBooks.length === 0;
    this.isSearched = true;
  } else {
    // Hide the book list and no results message when the search query is empty
    this.filteredBooks = [];
    this.noResults = false;
    this.isSearched = false;
  }
}
clearSearch() {
  this.searchQuery = '';
  this.books = [];
  this.noResults = false;
}

  
}

