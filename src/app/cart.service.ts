import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Book {
  id: number;
  title: string;
  author: string;
  publication_year: number;
  image_url: string;
  price: number;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://127.0.0.1:5000/cart'; // Your Flask API URL

  constructor(private http: HttpClient) {}

  addToCart(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  getCartItems(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`http://127.0.0.1:5000/books/${id}`);
  }
}
