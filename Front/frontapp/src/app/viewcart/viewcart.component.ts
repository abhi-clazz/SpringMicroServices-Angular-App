import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import {Observable} from 'rxjs';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';
import { ProductService } from '../product.service';
import { cartpayload } from '../productdetails/cartpayload';
import { cartpload } from './cartpload';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  carts!: Observable<Array<cartpload>>;
  registerForm!:FormGroup
  totalSum:number=0;
loader!:string;
dp!:String;
zy:number=4;
len:number=1;
cid:any;
  constructor(private dt:DataService,private cs:CartService,private prod:ProductService,private router:Router ,private stg:LocalStorageService) { 
    
  }

  ngOnInit(): void {
   //this.carts=this.cs.getAllProducts();
  
       console.log(this.carts)
     
  
       this.carts=this.cs.getAllProducts(this.stg.retrieve('uid'))
     
      this.carts.forEach(d=>{
        console.log(d.length)
        this.len=d.length
        this.zy=3
        if(d.length>0)
        {
         

          this.loader="loaded"; 
          this.dp="nok"
        }
        d.map(a=>{
          console.log(a.cartId);
          this.cid=a.cartId;
          this.totalSum=this.totalSum+(a.quantity*a.price)})
        console.log(this.totalSum)
      })
  
   
    this.registerForm = new FormGroup({
      q: new FormControl('')
    });
  
}
updatecart(a:any,dt:any)
{
  
 
  this.cs.updatecart(a,this.registerForm.get('q')!.value).subscribe((data:any)=>  {
    
  // window.alert("quantity updated")
  window.location.reload()

this.router.onSameUrlNavigation='reload'
    console.log(this.carts)

}, error => {
  console.log(error);
})


}
buy(a:any)
{
  this.dt.setApiCartData(a);
  this.router.navigateByUrl('/placeorder')


}
Checkout()
{
 this.dt.setDat(true);
     this.router.navigateByUrl('/placeorder/1')
}

deletecart(a:any)
{
  this.cs.deletecart(a).subscribe((data:any)=>  {
    console.log(data)
    this.carts=this.cs.getAllProducts(this.stg.retrieve('somerandom'))
    window.location.reload()

    this.router.navigateByUrl('/viewcart');
}, error => {
  console.log(error);
})


}}

