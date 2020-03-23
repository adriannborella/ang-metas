import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { ForgotAccountComponent } from './forgot-account/forgot-account.component';

import {MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatListModule } from '@angular/material';

// import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotAccountComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatListModule
  ]
})
export class AuthModule { }
