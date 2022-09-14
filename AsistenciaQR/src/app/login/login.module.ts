import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RecuperarPasswordComponent } from '../recuperar-password/recuperar-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginPageRoutingModule,
    MatProgressBarModule
  ],
  declarations: [LoginPage, RecuperarPasswordComponent]
})
export class LoginPageModule {}
