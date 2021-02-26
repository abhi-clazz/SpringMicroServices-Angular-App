import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import {Observable} from 'rxjs';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';
import { orderpload } from '../myorders/orderpload'

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
 orders!:Observable<Array<orderpload>>

  constructor(private cs:CartService,private router:Router, private stg:LocalStorageService,private dt:DataService) { }

  ngOnInit(): void {
    this.orders=this.cs.getUserOrders(this.stg.retrieve('uid'))
    console.log(this.orders)
  }

  status(id:any)
  {
this.dt.setStatusData(id);
this.router.navigateByUrl('/OrderStatus')


  }
}
