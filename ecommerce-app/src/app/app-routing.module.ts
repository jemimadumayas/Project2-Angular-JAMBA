import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { RegisterGuard } from './register.guard';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'movie/:title', component:MoviePageComponent},
  {path:'cart', component:CartComponent, canActivate: [RegisterGuard]},
  {path:'my-profile', component:UserProfileComponent, canActivate: [RegisterGuard]},
  {path:'all-movies', component:MovieListComponent},
  {path:'login', component:LoginPageComponent},
  {path:'checkout', component:CheckoutPageComponent},
  {path:'signin', component:SignupPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
