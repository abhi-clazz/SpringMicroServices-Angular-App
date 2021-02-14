import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { ProductService } from '../product.service';
import { ProductPayLoad } from '../products/productsPayLoad';

@Component({
  selector: 'app-productsearchlist',
  templateUrl: './productsearchlist.component.html',
  styleUrls: ['./productsearchlist.component.css']
})
export class ProductsearchlistComponent implements OnInit {
  products!:Observable<Array<ProductPayLoad>>

  constructor(private productService:ProductService,private navigator: Router,private dtt:DataService) { }
  ngOnInit(): void {
    this.dtt.apiOrderData$.subscribe(data=>this.products=data)

  }
  buy(a:any)
  {
    this.dtt.setApiCartData(a);
             this.navigator.navigateByUrl('/placeorder');
  
  
  }

}
