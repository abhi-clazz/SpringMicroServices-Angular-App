import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { DataService } from '../data.service';
import { cartpload } from '../viewcart/cartpload';
import { LocalStorageService } from 'ngx-webstorage';
import {Observable,interval,Subscription} from 'rxjs';
import { CartService } from '../cart.service';
import { ProductPayLoad } from '../products/productsPayLoad';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
products!:ProductPayLoad
cartsize!:any
s!:Subscription
carts!: Observable<Array<cartpload>>;
  constructor(public authService: AuthService,private stg:LocalStorageService,private cs:CartService,private router: Router,private service:ProductService,private dt:DataService) {
    this.searchForm = new FormGroup({
      item: new FormControl()
    });
  }

  ngOnInit() {
if(this.stg.retrieve('uid')!=null)
{
this.s=interval(3000).subscribe( val=>{
this.cs.getAllProducts(this.stg.retrieve('uid')).subscribe(d=>{this.cartsize=d.length})})
   
}
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');

  }
  
  search() {
    this.service.getProducts(this.searchForm.get('item')!.value).subscribe((data:ProductPayLoad)=>
    {
      console.log("Data"+data)
    this.products=data
    this.dt.setitemData(data)
    console.log("Data"+data)
    console.log("Data"+data.productName)

    this.router.navigateByUrl('/productitems');
  }
      )


  }
}
