import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identity, Observable } from 'rxjs';
import { orderstatuspayload } from './orderstatus/orderstatuspayload';

@Injectable({
  providedIn: 'root'
})
export class OrderstatusService {
  

  constructor(private httpClient:HttpClient) { }


 confirm(id: any,b1:boolean,b2:boolean,b3:boolean):Observable<any> {
    return this.httpClient.post('http://localhost:8100/api/TrackService/OrderStatus/', {orderId:id,processed: b1,shipped:b2,delivered:b3});
  }

  getStatus(id: any):Observable<orderstatuspayload>{
    return this.httpClient.get<orderstatuspayload>('http://localhost:8100/api/TrackService/OrderStatus/' + id);
}
update(value: any, b1: boolean,b2: boolean,b3: boolean) {
console.log("hi");
  return this.httpClient.put('http://localhost:8100/api/TrackService/OrderStatus/' + value,{processed: b1,shipped:b2,delivered:b3});
}
}