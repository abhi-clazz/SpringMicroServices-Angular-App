import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiData=new BehaviorSubject<any>(null);
  public apiData$=this.apiData.asObservable();

  setData(data:any)
  {
    this.apiData.next(data)
  }

  private apiOrderData=new BehaviorSubject<any>(null);
  public apiOrderData$=this.apiData.asObservable();

  setOrderData(data:any)
  {
    this.apiOrderData.next(data)
  }

  private apiCartData=new BehaviorSubject<any>(null);
  public apiCartData$=this.apiCartData.asObservable();

  setApiCartData(data:any)
  {
    this.apiCartData.next(data)
  }

  private apiData1=new BehaviorSubject<any>(null);
  public apiData1$=this.apiData1.asObservable();

  setData1(data:any)
  {
    this.apiData1.next(data)
  }
  private apiData3=new BehaviorSubject<any>(null);
  public apiData3$=this.apiData3.asObservable();

  setData3(data:any)
  {
    this.apiData3.next(data)
  }

  private itemData=new BehaviorSubject<any>(null);
  public itemData$=this.itemData.asObservable();

  setitemData(data:any)
  {
    this.itemData.next(data)
  }
}
