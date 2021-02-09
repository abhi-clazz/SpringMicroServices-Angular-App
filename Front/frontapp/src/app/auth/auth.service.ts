import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterPayload} from './register-payload';
import {Observable} from 'rxjs';
import {LoginPayload} from './login-payload';
import {JwtAutResponse} from './jwt-aut-response';
import {map} from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';
import { UserLoad } from '../productdetails/userload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8100/api/auth/';
flag!:Number;
  constructor(private httpClient: HttpClient, private localStoraqeService: LocalStorageService) {
  }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url + 'signup', registerPayload);
  }

  
  userdata(): Observable<Array<UserLoad>>{
    return this.httpClient.get<Array<UserLoad>>("http://localhost:8100/api/auth/userdetails");
  }

  login(loginPayload: LoginPayload): Observable<any> {
   
    return this.httpClient.post<any>(this.url + 'login', loginPayload).pipe(map(data => {
      this.localStoraqeService.store('authenticationToken', data.authenticationToken);
      this.localStoraqeService.store('username', data.username);
      console.log(data)
      this.flag=2
      return data;
    }));
  }

  isAuthenticated(): boolean {
    return this.localStoraqeService.retrieve('username') != null;
  }

  logout() {
    this.localStoraqeService.clear('authenticationToken');
    this.localStoraqeService.clear('username');
    this.localStoraqeService.clear('somerandom');
  }
}
