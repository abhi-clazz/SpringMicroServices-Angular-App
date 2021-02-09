import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Observable} from 'rxjs';
import {ProductPayLoad} from './productsPayLoad';
import { DataService } from '../data.service';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dttt:any;
  len:number=9
  lent:number=2
  quant:Number=1;

products!:Observable<Array<ProductPayLoad>>
  constructor(private productService:ProductService,private navigator: Router,private dtt:DataService,private authService:AuthService,private stg:LocalStorageService) {
    dtt.apiData$.subscribe(data=>this.dttt=data)
    authService.userdata().subscribe(data1=>{
      console.log(data1)
      this.stg.store('uid',data1);
    }
    )
console.log(this.dttt)
   }

  ngOnInit(): void {
    // this.dttt=this.dtt.sharedData
    // console.log(this.dtt.sharedData)
    this.products=this.productService.getAllProducts();
    //this.dtt.sharedData="okkk"
this.products.forEach(d=>
  {
    this.len=d.length
    if(d.length>0)
    {
      this.lent=1
    }
  })
  }
  buy(a:any)
{
  this.dtt.setApiCartData(a);
           this.navigator.navigateByUrl('/placeorder');


}
}
