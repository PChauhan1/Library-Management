import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookComponent } from './book/book.component';
import {  HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { RegistrationComponent } from './registration/registration.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ModalService } from './modal.service';
import { AnnoucemnetmodalComponent } from './annoucemnetmodal/annoucemnetmodal.component';

import { LogInComponent } from './log-in/log-in.component';
import { EditbookComponent } from './editbook/editbook.component';
import { BookdetailpopupComponent } from './bookdetailpopup/bookdetailpopup.component';
import { CartService } from './cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { NewarrivalComponent } from './newarrival/newarrival.component';
// import { CartComponent } from './cart/cart.component';
@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [LogInComponent,BookdetailpopupComponent,NewarrivalComponent,CheckoutComponent,EditbookComponent,RegistrationComponent,AnnoucemnetmodalComponent,AddBookComponent,ReactiveFormsModule,RouterOutlet,HttpClientModule,BookComponent,ContactUsComponent,AboutUsComponent,CommonModule,HomeComponent,RouterModule,FormsModule],
  providers:[BookService,ModalService,CartService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libraryapp';
}
