import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { OrderstatusService } from '../orderstatus.service';
import { orderstatuspayload } from './orderstatuspayload';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {
id:any;
status!:orderstatuspayload;
  constructor(private dt:DataService,private od:OrderstatusService) {this.dt.statusData$.subscribe(data=>
    {
      this.id=data
console.log(this.id)
    }) }

  ngOnInit(): void {
    this.od.getStatus(this.id).subscribe((data:orderstatuspayload)=>
    {
console.log("hi");
this.status=data;
console.log(data)
    })
  }

}
