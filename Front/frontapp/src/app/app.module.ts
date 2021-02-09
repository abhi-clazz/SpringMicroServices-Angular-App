import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterSuccessComponent} from './auth/register-success/register-success.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {EditorModule} from '@tinymce/tinymce-angular';
import {HttpClientInterceptor} from './http-client-interceptor';
import {AuthGuard} from './auth.guard';
import {MatStepperModule} from '@angular/material/stepper';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProductsComponent } from './products/products.component';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatToolbarModule} from '@angular/material/toolbar';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { OrderPlacementComponent } from './order-placement/order-placement.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ViewcartComponent } from './viewcart/viewcart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent,
  
    ProductsComponent,
    ProductdetailsComponent,
    OrderPlacementComponent,
    OrderConfirmationComponent,
    ViewcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,MatInputModule,MatProgressSpinnerModule,MatStepperModule,
    MatCardModule,
    MatButtonModule,MatToolbarModule,MatIconModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: ProductsComponent,canActivate: [AuthGuard]},
      {path: 'register', component: RegisterComponent},
      {path: 'product/:id', component: ProductdetailsComponent,canActivate: [AuthGuard]},
      // {path: 'placeorder/:id/:id1', component: OrderPlacementComponent,canActivate: [AuthGuard]},
      {path: 'placeorder', component: OrderPlacementComponent,canActivate: [AuthGuard]},

      {path: 'login', component: LoginComponent},
      {path: 'viewcart', component: ViewcartComponent,canActivate: [AuthGuard]},

      {path: 'register-success', component: RegisterSuccessComponent,canActivate: [AuthGuard]},
      {path: 'home', component: ProductsComponent,canActivate: [AuthGuard]},
      {path: 'ordersuccess', component: OrderConfirmationComponent,canActivate: [AuthGuard]},

    ]),
    HttpClientModule,
    EditorModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
