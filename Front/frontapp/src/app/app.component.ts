import { Component,OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontapp';
  public messageForSibling!:string;
  public subscription!:Subscription;
  constructor(
    private msgService:DataService
   
  ) {}
  // public ngOnDestroy():void
  // {
  //   this.subscription.unsubscribe();
  // }
  // public ngOnInit():void
  // {
  //   this.subscription=this.msgService.getMessage().subscribe(msg=>this.messageForSibling=msg);
  // }


}
