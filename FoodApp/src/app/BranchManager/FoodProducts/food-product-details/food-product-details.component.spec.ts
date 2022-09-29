import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodProductDetailsComponent } from './food-product-details.component';

describe('FoodProductDetailsComponent', () => {
  let component: FoodProductDetailsComponent;
  let fixture: ComponentFixture<FoodProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
