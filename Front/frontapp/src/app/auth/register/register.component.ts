import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RegisterPayload} from '../register-payload';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerPayload: RegisterPayload;
  rmsg!:String

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    this.registerPayload = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    if(this.registerForm.get('username')!.value.length<1||this.registerForm.get('email')!.value.length<1||this.registerForm.get('confirmPassword')!.value.length<1||this.registerForm.get('password')!.value.length<1)
    {
      this.router.navigateByUrl('/register');
      this.rmsg="All fields Are mandatory"

    }
    else if(this.registerForm.get('password')!.value !== this.registerForm.get('confirmPassword')!.value)
    {
      this.router.navigateByUrl('/register');
      this.rmsg="Both Password and Confirm password should be Same"
    }

    else
    {

    
    this.registerPayload.username = this.registerForm.get('username')!.value;
    this.registerPayload.email = this.registerForm.get('email')!.value;
    this.registerPayload.password = this.registerForm.get('password')!.value
    this.registerPayload.confirmPassword = this.registerForm.get('confirmPassword')!.value;

    this.authService.register(this.registerPayload).subscribe(data => {
      console.log('register succes');
      this.router.navigateByUrl('/register-success');
    }, error => {
      console.log('register failed');
    });
  }
  }
}
