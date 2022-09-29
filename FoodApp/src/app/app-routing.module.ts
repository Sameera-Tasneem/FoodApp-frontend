import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodProductDetailsComponent } from './BranchManager/FoodProducts/food-product-details/food-product-details.component';

const routes: Routes = [
  {path: 'food-product-details', component:FoodProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
