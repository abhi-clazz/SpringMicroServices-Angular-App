import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ProductPayLoad } from '../products/productsPayLoad';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
products!:Observable<Array<ProductPayLoad>>
  constructor(public authService: AuthService,private router: Router,private service:ProductService,private dt:DataService) {
    this.searchForm = new FormGroup({
      item: new FormControl()
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');

  }
  
  search() {
    this.products=this.service.getProducts(this.searchForm.get('item')!.value)
    this.dt.setitemData(this.products)

    this.router.navigateByUrl('/productitems');

  }
}
