import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  showSuccessMessage:boolean=false;
  errors: { [key: string]: string } = {};

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevent default form submission

    this.showSuccessMessage=true

    // Get form values
    const form = event.target as HTMLFormElement;
    const name = (form.querySelector('#name') as HTMLInputElement).value.trim();
    const email = (form.querySelector('#email') as HTMLInputElement).value.trim();
    const message = (form.querySelector('#message') as HTMLTextAreaElement).value.trim();

    // Reset errors
    this.errors = {};

    // Validate fields
    if (!name) {
      this.errors['name'] = 'Name is required.';
    }
    if (!email) {
      this.errors['email'] = 'Email is required.';
    } else if (!this.isValidEmail(email)) {
      this.errors['email'] = 'Invalid email format.';
    }
    if (!message) {
      this.errors['message'] = 'Message is required.';
    }

    // If there are no errors, process the form data
    if (Object.keys(this.errors).length === 0) {
      console.log({ name, email, message });
      // Handle form submission (e.g., send data to server)
    }
  }

  isValidEmail(email: string): boolean {
    // Simple email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}



