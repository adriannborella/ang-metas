import { NgModule, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { ForgotAccountComponent } from './forgot-account/forgot-account.component';

import { SharedModule } from '../../shared/shared.module';
import { AngControlsModule } from 'ang-controls';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { AuthNavComponent } from './auth-nav/auth-nav.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotAccountComponent,
    AuthHomeComponent,
    AuthNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngControlsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
