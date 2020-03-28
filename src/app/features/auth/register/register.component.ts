import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { UserEntity } from '../../../entities/user.entity';
import { FormControl, Validators, FormGroup, } from '@angular/forms';

import Swal from 'sweetalert2';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msgErrorPasswd = '';

  registerForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email ]),
    fullname : new FormControl('', [Validators.required ]),
    password : new FormControl('', [Validators.required ]),
    repassword : new FormControl('', [Validators.required ])
  });

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  register() {
    if (this.registerForm.status === 'INVALID') { return; }

    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor...',
      icon: 'info',
      title: 'Register user'
    });

    Swal.showLoading();

    if (!this.validate_passwords()) {
      Swal.fire({
        allowOutsideClick: false,
        text: 'The passwords are not equals',
        icon: 'error',
        title: 'Register user'
      });
      return;
    }

    this.auth.mailRegister(this.registerForm.value).subscribe(
      (resp) => {
        Swal.close();
        this.router.navigateByUrl('/goals');
      },
      (err) => {
        Swal.fire({
          allowOutsideClick: false,
          text: this.get_message_error(err),
          icon: 'error',
          title: 'Register user'
        });
      }
    );
  }

  get_message_error(err): string {
    const message = err.error.error.message;
    let result = message;

    switch (message) {
      case 'EMAIL_EXISTS':
        result = 'The mail has been used. If it is your mail Log in please';
        break;

      default:
        break;
    }

    return result;
  }

  validate_passwords(): boolean {
    return this.registerForm.value.password === this.registerForm.value.repassword;
  }
}
