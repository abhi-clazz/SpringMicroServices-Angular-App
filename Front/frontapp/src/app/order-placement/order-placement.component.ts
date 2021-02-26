import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import { DataService } from '../data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Orderpayload } from './OrderPayload';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-placement',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.css']
})
export class OrderPlacementComponent implements OnInit {
  permaLink:any;
  q:any;
  c:any;
  state$:any;
  dttt21:any;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  orderpayload!:Orderpayload
  isBuyingEntireCart!:boolean
  isEditable = false;
permaLink1!:any
so:any;

  constructor(public activatedRoute: ActivatedRoute,private dtt:DataService,private cs:CartService,private stg:LocalStorageService,private route :Router,private router:ActivatedRoute,private _formBuilder: FormBuilder,private productservice:ProductService) { 
  this.dtt.apiData1$.subscribe(data=>this.dttt21=data)
this.dtt.dat$.subscribe(data=>{
console.log(data);
this.isBuyingEntireCart=data})
  this.dtt.apiCartData$.subscribe(data=>{
    this.q=data;
  })
this.dtt.setData3(this.dttt21)
this.orderpayload = {
  userId:'',
  orderId:'', productId:'', city:'', name:'',saddress:'', baddress:'', quantity:'', pin:''
};
}
  
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params => {
      this.permaLink1 = params['id'];
    });
    this.firstFormGroup = this._formBuilder.group({
      address: ['', Validators.required],      badd: ['', Validators.required],
      city: ['', Validators.required],      pin: ['', Validators.required],
      name: ['', Validators.required],      mobile: ['', Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }
  
 
pay()
{

  if(this.permaLink1 ==1)
{
  
    this.orderpayload.city=this.firstFormGroup.get('city')!.value;
    this.orderpayload.name= this.firstFormGroup.get('name')!.value
    this.orderpayload.saddress=this.firstFormGroup.get('address')!.value
    this.orderpayload.baddress=this.firstFormGroup.get('badd')!.value
    this.orderpayload.pin=this.firstFormGroup.get('pin')!.value
    this.orderpayload.userId=this.stg.retrieve('uid');
    
    this.productservice.checkout(this.orderpayload).subscribe(data => {
      
      
            this.route.navigateByUrl('ordersuccess')
          }, error => {
          });
      
      }
 
  if(this.isBuyingEntireCart!=true)
  {
    this.orderpayload.city=this.firstFormGroup.get('city')!.value;
    this.orderpayload.name= this.firstFormGroup.get('name')!.value
    this.orderpayload.productId=this.q.productId;
    this.orderpayload.saddress=this.firstFormGroup.get('address')!.value
    this.orderpayload.baddress=this.firstFormGroup.get('badd')!.value
    this.orderpayload.pin=this.firstFormGroup.get('pin')!.value
    this.orderpayload.userId=this.stg.retrieve('uid');
    this.orderpayload.quantity=this.q.quantity
  

    this.productservice.placeorder(this.orderpayload).subscribe(data => {
      
this.cs.deletecart(this.q.cartId).subscribe()

      this.dtt.setData(data.orderId)
      this.route.navigateByUrl('ordersuccess')
    }, error => {
    });

}
}
}


