import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private loginService:LoginService, private router: Router) 
  {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }


  get Username() { return this.loginForm.get('username') }
  get Password() { return this.loginForm.get('password') }

  onSubmit() {
    let username = this.Username?.value;
    let password = this.Password?.value;
    this.loginService.getLoginResponse(username, password).subscribe((res:any) =>
      {
        if (res.hasOwnProperty("role")) {
          this.router.navigate(["/home"], {
            state: {
              username: username,
              role: res.role
            }
          })
        }
      }
    )

  }

}
