import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ProductPayLoad} from './products/productsPayLoad';
import {HttpClient} from '@angular/common/http';
import { Orderpayload } from './order-placement/OrderPayload';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

   getAllProducts(): Observable<Array<ProductPayLoad>>{
    return this.httpClient.get<Array<ProductPayLoad>>("http://localhost:8100/api/Product-service/Products");
  }
   getProducts(name:String): Observable<Array<ProductPayLoad>>{
     console.log(name)
             return this.httpClient.get<Array<ProductPayLoad>>("http://localhost:8046/InventoryProducts/"+name);

  }

  getProduct(permaLink: Number):Observable<ProductPayLoad>{
    return this.httpClient.get<ProductPayLoad>('http://localhost:8100/api/Product-service/Products/' + permaLink);
  }
  placeorder(orderPayload: Orderpayload): Observable<any> {
    return this.httpClient.post("http://localhost:8100/api/App-OrderService/Orders/", orderPayload);
}
}
