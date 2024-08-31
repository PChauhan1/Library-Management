import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

interface User {
  id?: number;
  username: string;
  email: string;
  password: string;  // Optional because you may not want to return the password
}
// interface UserRegistration {
//   username: string;
//   email: string;
//   password: string;
// }

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  standalone: true,
  imports:[CommonModule, FormsModule,RouterOutlet,RouterModule]
})
export class RegistrationComponent {
  

  user:User = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

 
  onSubmit() {
    this.bookService.registerUser(this.user).subscribe(
      response => {
        console.log('User registered successfully:', response);
        alert('Registration successful! Please log in.');
        this.router.navigate(['/log-in']);
        this.user = { username: '', email: '', password: '' };
      },
      error => {
        console.error('Error registering user:', error);
        alert('Registration failed. Please try again.');
      }
    );
  }

  
}