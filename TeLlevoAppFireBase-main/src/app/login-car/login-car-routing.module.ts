import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginCarPage } from './login-car.page';

const routes: Routes = [
  {
    path: '',
    component: LoginCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginCarPageRoutingModule {}
