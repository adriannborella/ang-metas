import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email ]),
    password : new FormControl('', [Validators.required ]),
  });

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.status === 'INVALID') { return; }

    Swal.fire({
      allowOutsideClick: false,
      text: 'Wait please...',
      icon: 'info',
      title: 'Login user'
    });

    Swal.showLoading();

    this.auth.mailLogin(this.loginForm.value).subscribe(
      (resp) => {
        Swal.close();
        this.router.navigateByUrl('/goals');
      },
      (err) => {
        Swal.fire({
          allowOutsideClick: false,
          text: err.error.error.message,
          icon: 'error',
          title: 'Error in the user login'
        });
        console.log('Error:', err.error.error.message);
      });
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  goToForgot() {
    this.router.navigateByUrl('/forgot');
  }
}
