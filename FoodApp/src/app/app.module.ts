import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodProductDetailsComponent } from './BranchManager/FoodProducts/food-product-details/food-product-details.component';
import { AddFoodProductComponent } from './BranchManager/FoodProducts/add-food-product/add-food-product.component';
import { EditFoodProductComponent } from './BranchManager/FoodProducts/edit-food-product/edit-food-product.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodProductDetailsComponent,
    AddFoodProductComponent,
    EditFoodProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
