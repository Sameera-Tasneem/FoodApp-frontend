import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodProductDetailsComponent } from './BranchManager/FoodProducts/food-product-details/food-product-details.component';
import { AddFoodProductComponent } from './BranchManager/FoodProducts/add-food-product/add-food-product.component';
import { EditFoodProductComponent } from './BranchManager/FoodProducts/edit-food-product/edit-food-product.component';
import { AddFoodOrderComponent } from './Staff/FoodOrder/add-food-order/add-food-order.component';
import { EditFoodOrderComponent } from './Staff/FoodOrder/edit-food-order/edit-food-order.component';
import { FoodOrderDetailsComponent } from './Staff/FoodOrder/food-order-details/food-order-details.component';
import { ItemsDetailsComponent } from './Staff/Items/items-details/items-details.component';
import { AddItemsComponent } from './Staff/Items/add-items/add-items.component';
import { EditItemsComponent } from './Staff/Items/edit-items/edit-items.component';
import { StaffDetailsComponent } from './BranchManager/StaffManagement/staff-details/staff-details.component';
import { AddStaffComponent } from './BranchManager/StaffManagement/add-staff/add-staff.component';
import { EditStaffComponent } from './BranchManager/StaffManagement/edit-staff/edit-staff.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodProductDetailsComponent,
    AddFoodProductComponent,
    EditFoodProductComponent,
    AddFoodOrderComponent,
    EditFoodOrderComponent,
    FoodOrderDetailsComponent,
    ItemsDetailsComponent,
    AddItemsComponent,
    EditItemsComponent,
    StaffDetailsComponent,
    AddStaffComponent,
    EditStaffComponent,
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
