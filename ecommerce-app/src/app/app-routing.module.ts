import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'movie/:title', component:MoviePageComponent},
  {path:'cart', component:CartComponent},
  {path:'my-profile', component:UserProfileComponent},
  {path:'all-movies', component:MovieListComponent},
  {path:'login', component:LoginPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
