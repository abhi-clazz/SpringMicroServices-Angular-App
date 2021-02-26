import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderstatusService } from '../orderstatus.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  updateForm!:FormGroup

  constructor(private od:OrderstatusService) {
    this.updateForm = new FormGroup({
      orderId: new FormControl()
    });
   }
  

  ngOnInit(): void {
  }
  selectedType:any;

  onChange(event:any) {
    this.selectedType = event.target.value;
  }
  confirm()
  {
    this.od.confirm(this.updateForm.get('orderId')!.value,false,false,false).subscribe((data:any)=>  {
    
 

    }, error => {
      console.log(error);
    })
  }
  deliver1()
  {
this.od.update(this.updateForm.get('orderId')!.value,true,false,false).subscribe((data:any)=>  {
    
 

}, error => {
  console.log(error);
})
  }
deliver2()
  {
    this.od.update(this.updateForm.get('orderId')!.value,true,true,false).subscribe((data:any)=>  {
    
 

}, error => {
  console.log(error);
})

  } 
  update3()
  {
    this.od.update(this.updateForm.get('orderId')!.value,true,true,true).subscribe((data:any)=>  {
    
 

}, error => {
  console.log(error);
})
  }
}
