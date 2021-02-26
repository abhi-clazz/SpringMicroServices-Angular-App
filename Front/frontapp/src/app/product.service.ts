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
  order(orderPayload: Orderpayload):Observable<any>{
    return this.httpClient.post("http://localhost:8100/api/App-OrderService/Carts",orderPayload);
  }
   getProducts(name2:String): Observable<ProductPayLoad>{
     console.log(name2)
     console.log(name2)
     return this.httpClient.get<ProductPayLoad>(`http://localhost:8100/api/Product-service/InventoryProducts/${name2}`);

  }

  getProduct(permaLink: Number):Observable<ProductPayLoad>{
    return this.httpClient.get<ProductPayLoad>('http://localhost:8100/api/Product-service/Products/' + permaLink);
  }
  placeorder(orderPayload: Orderpayload): Observable<any> {
    return this.httpClient.post("http://localhost:8100/api/App-OrderService/Orders/", orderPayload);
}
checkout(orderPayload: Orderpayload): Observable<any> {
  return this.httpClient.post("http://localhost:8100/api/App-OrderService/Carts/", orderPayload);
}

}
