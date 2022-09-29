import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodProductService } from 'src/app/Services/food-product.service';

@Component({
  selector: 'app-food-product-details',
  templateUrl: './food-product-details.component.html',
  styleUrls: ['./food-product-details.component.css']
})
export class FoodProductDetailsComponent implements OnInit {

  result: any;

  constructor(private router: Router , private route:ActivatedRoute, private foodProductService: FoodProductService) { }

  ngOnInit(): void {
    this.foodProductService.getData().subscribe((data) => {
      this.result = data;
      console.log(this.result);
    })
  }

}
