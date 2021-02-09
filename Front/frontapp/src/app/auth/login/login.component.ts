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
yo!:Number;
f:any;
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
    
    this.yo=2;
    this.loginPayload.username = this.loginForm.get('username')!.value
    this.loginPayload.password = this.loginForm.get('password')!.value;
   // this.dt.sharedData=this.loginForm.get('username')!.value

    this.authService.login(this.loginPayload).subscribe(data => {
      console.log(data)
      this.f=true;

      // this.dt.sharedData=this.loginPayload.username
      console.log(this.authService.flag)

      if (this.authService.flag==2) {
        console.log('login success');
        this.dt.setData(data)
        this.yo=3;
        this.router.navigateByUrl('/home');
      } else  {
        

        console.log('Login failed');
      }
    });

    this.yo=5

  }
}
