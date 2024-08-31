import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule , Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,FormsModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // To store error messages

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}
  onSubmit() {
    var userName= this.username;
    var password= this.password
  
    
    this.bookService.loginUser(this.username).subscribe(
    response => {
    if(userName==response.username && password==response.password)
       {
    
        // If the username and password match, navigate to the home page
        this.router.navigate(['/home']);
       }
   //    else if(userName==response.username && password != response.password) {
    else{
    
        // If the username exists but the password doesn't match, show an alert
        alert('Incorrect password. Please try again.');
       }
    },
    
    error => {
      console.log("error occured in api");
    alert('Username not found. Please register.');
        this.router.navigate(['/registration']);
    }
  );

    // Reset form fields
    this.username = '';
    this.password = '';
  }
 

}