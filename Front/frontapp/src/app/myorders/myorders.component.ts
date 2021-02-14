import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import {Observable} from 'rxjs';
import { CartService } from '../cart.service';
import { orderpload } from '../myorders/orderpload'

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
 orders!:Observable<Array<orderpload>>

  constructor(private cs:CartService,private stg:LocalStorageService) { }

  ngOnInit(): void {
    this.orders=this.cs.getUserOrders(this.stg.retrieve('uid'))
    console.log(this.orders)
  }

}
