import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Book {
  id:number;
  title: string;
  author: string;
  publication_year: number;
  image_url:string;
  price:number;
  rating:number;
  
}
interface User {
  id?: number;
  username: string;
  email: string;
  password?: string;  // Optional because you may not want to return the password
}


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = ' http://127.0.0.1:5000/'; // Replace with your Flask API URL

  constructor(private http: HttpClient) { }



   // Book-related methods
   getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/books/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/books`, book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/books/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/books/${id}`);
  }
  // User-related methods
  registerUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  loginUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/login/${username}`);
  }
}