import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    MoviePageComponent,
    UserProfileComponent,
    MovieListComponent,
    LoginPageComponent,
    CheckoutPageComponent,
    SignupPageComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
