import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { AccountService } from './account.service';
import { BasicHighlightDirective } from './user-directive/basic-highlight.directive';
import { HomeComponent } from './home/home.component';
//import for api
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService }  from './in-memory-data.service';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantLoginComponent } from './restaurant/restaurant-login/restaurant-login.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelDashboardComponent } from './hotel/hotel-dashboard/hotel-dashboard.component';
import { SideMenuComponent } from './hotel/hotel-dashboard/side-menu/side-menu.component';
import { AdminDashComponent } from './admin/admin-dash/admin-dash.component';
import { RestSignupComponent } from './admin/admin-dash/rest-signup/rest-signup.component';
import { DeliverySignupComponent } from './admin/admin-dash/delivery-signup/delivery-signup.component';
import { RestDashComponent } from './restaurant/rest-dash/rest-dash.component';
import { AdminService } from './admin/admin.service'






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    BasicHighlightDirective,
    HomeComponent,
    FooterComponent,
    AdminComponent,
    AdminLoginComponent,
    RestaurantComponent,
    RestaurantLoginComponent,
    HotelComponent,
    HotelDashboardComponent,
    SideMenuComponent,
    AdminDashComponent,
    RestSignupComponent,
    DeliverySignupComponent,
    RestDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AccountService,
    InMemoryDataService,
    AdminService
  ], //to add service in module
  bootstrap: [AppComponent]
})
export class AppModule { }
