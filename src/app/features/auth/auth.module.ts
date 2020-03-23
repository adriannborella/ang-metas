import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { ForgotAccountComponent } from './forgot-account/forgot-account.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotAccountComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
