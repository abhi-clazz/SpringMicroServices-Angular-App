import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../data.service';
import {ProductService} from '../product.service';
import {ProductPayLoad} from '../products/productsPayLoad';
import {Observable} from 'rxjs';
import { CartService } from '../cart.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { cartpayload } from './cartpayload';
import { AuthService } from '../auth/auth.service';
import { UserLoad } from './userload';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product!: ProductPayLoad;
  cartitems!:cartpayload;
  permaLink!: Number;
  sid!:any
  udata!:Observable<Array<UserLoad>>
dttt1:any;
so:any;
uid:any;
  constructor(private formBuilder: FormBuilder,private router: ActivatedRoute,private stg: LocalStorageService,private navigator: Router,private cart:CartService , private authservice:AuthService, private productService: ProductService,private dtt:DataService) {
  
    console.log(authservice.userdata())
    authservice.userdata().subscribe(data1=>{
      console.log(data1)
      this.stg.store('somerandom',data1);

      this.cartitems = {
        productId:'',
        quantity: 1,
        userId:data1,
        cartId:'',
        productName:'', 
        price:'', 
        productImageFile:'', 
        brand:'',
        description:''
        
      };
    })
    console.log(this.uid)
   
    this.dtt.apiData$.subscribe(data=>this.dttt1=data)
    console.log(this.dttt1)

  }
  ngOnInit():void {
    // this.dttt1=this.dtt.sharedData
//this.so=this.dtt.getMessage();

    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });
    
    this.productService.getProduct(this.permaLink).subscribe((data:ProductPayLoad) => {
      this.product = data;
      this.dtt.setData1(this.product)

    },(err: any) => {
      console.log('Failure Response');
    })}

    addcart( a:any) {
      this.cartitems.productId=a.productId;
      this.cartitems.productName=a.productName;

      this.cartitems.productImageFile=a.productImageFile;
      this.cartitems.brand=a.brand;
      this.cartitems.price=a.price;
      // this.cartitems.userId=a.productId;
  console.log(a);
  console.log(this.cartitems);
  
  //this.navigator.navigateByUrl('/viewcart');
      this.cart.addCart(this.cartitems).subscribe(data=>  {this.navigator.navigateByUrl('/viewcart');
    }, error => {
      console.log(error);
    })
         //this.navigator.navigateByUrl('/viewcart');
      }
  

}
