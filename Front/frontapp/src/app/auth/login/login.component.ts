import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginPayload} from '../login-payload';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload: LoginPayload;
loading!:boolean;
isauthenticated!:boolean;
  constructor(private authService: AuthService, private dt:DataService, private router: Router) {

    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    this.loginPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {

  }

  onSubmit() {
    this.loading=true;
    this.loginPayload.username = this.loginForm.get('username')!.value
    this.loginPayload.password = this.loginForm.get('password')!.value;
    this.authService.login(this.loginPayload).subscribe(data => 
      {
        this.loading=false;
        this.isauthenticated=true;
        this.dt.setData(data)
        this.router.navigateByUrl('/home');
        
      } ,error=>{this.loading=false;this.isauthenticated=false;
        console.log(error)});
    

  }
}
