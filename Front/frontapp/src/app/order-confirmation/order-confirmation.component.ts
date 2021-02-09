import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  
  d:any;
 

  constructor(private dtt:DataService,private navigator:Router) { 
  this.dtt.apiOrderData$.subscribe(data=>this.d=data)
  console.log(this.d)
// this.d=JSON.stringify(this.d)
}
  ngOnInit(): void {
    if(this.d==null)
    {
this.navigator.navigateByUrl('home')
    }
  }

}
