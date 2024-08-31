import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { AddBookComponent } from './add-book/add-book.component';
import { LogInComponent } from './log-in/log-in.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


export const routes: Routes = [
    {path:" ",pathMatch:"full",redirectTo:"/home"},
    {path:"log-in",component:LogInComponent},
    {path:'home',component: HomeComponent},
    {path:'contact-us',component: ContactUsComponent},
    {path:'books',component: BookComponent},
    {path:"about-us",component:AboutUsComponent},
    {path:"registration",component:RegistrationComponent},
    {path:"addbook",component:AddBookComponent},
    {path:"cart",component:CartComponent},
    {path:"Checkout",component:CheckoutComponent}
    
    

];

