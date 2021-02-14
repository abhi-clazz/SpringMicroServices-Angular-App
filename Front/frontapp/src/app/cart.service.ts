import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { orderpload } from './myorders/orderpload';
import { cartpayload } from './productdetails/cartpayload';
import { ProductPayLoad } from './products/productsPayLoad';
import { cartpload } from './viewcart/cartpload';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 

  constructor(private httpClient:HttpClient) { }
  addCart(cart: cartpayload){
    console.log(cart)
    return this.httpClient.post("http://localhost:8100/api/CartService/Carts", cart,{responseType: 'text'});
  
}
updatecart(a: any, val: any) {
  console.log(val)
  return this.httpClient.patch("http://localhost:8100/api/CartService/Cart/"+a, {quantity:val});

}
deletecart(a:any)
{
  console.log(a)
  return this.httpClient.delete("http://localhost:8100/api/CartService/Cart/"+a);
}
getAllProducts(idd:Number): Observable<Array<cartpload>>{
    return this.httpClient.get <Array<cartpload>>('http://localhost:8100/api/CartService/UserCart/'+idd);
  }


  getUserOrders(idd:Number): Observable<Array<orderpload>>{
    return this.httpClient.get <Array<orderpload>>('http://localhost:8100/api/App-OrderService/UserOrders/'+idd);
  }
}