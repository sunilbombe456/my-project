import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { UserComponent } from "./user/user.component";
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import{ AdminComponent } from './admin/admin.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import{ HotelComponent } from './hotel/hotel.component';
import { HotelDashboardComponent } from './hotel/hotel-dashboard/hotel-dashboard.component';
import { RestaurantLoginComponent } from './restaurant/restaurant-login/restaurant-login.component';
import { DeliverySignupComponent } from '././admin/admin-dash/delivery-signup/delivery-signup.component'




const routes: Routes = [ 
  { path: '' , redirectTo: '/homeComp' , pathMatch : 'full'},
  { path: 'homeComp' , component:HomeComponent},
  { path: 'recipeComp', component:  RecipesComponent},
  { path: 'shoppingComp', component: ShoppingListComponent},
  { path: 'userAccount', component: UserComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'restaurant', component: RestaurantComponent},
  {path: 'hotel', component: HotelComponent},
  {path: 'hotelDashboard/:hotel_id', component: HotelDashboardComponent },
  {path: 'restSignin', component: RestaurantLoginComponent},
  {path:'dSignUp', component: DeliverySignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
