import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';

=======
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
>>>>>>> header

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    MoviePageComponent,
    UserProfileComponent,
    MovieListComponent,
    LoginPageComponent,
    SignupPageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    FormsModule,
    HttpClientModule,
>>>>>>> header
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
