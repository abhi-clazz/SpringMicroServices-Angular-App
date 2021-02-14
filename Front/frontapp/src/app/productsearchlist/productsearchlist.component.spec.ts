import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsearchlistComponent } from './productsearchlist.component';

describe('ProductsearchlistComponent', () => {
  let component: ProductsearchlistComponent;
  let fixture: ComponentFixture<ProductsearchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsearchlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsearchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
