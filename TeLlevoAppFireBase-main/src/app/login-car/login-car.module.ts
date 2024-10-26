import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginCarPageRoutingModule } from './login-car-routing.module';

import { LoginCarPage } from './login-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginCarPageRoutingModule
  ],
  declarations: [LoginCarPage]
})
export class LoginCarPageModule {}
