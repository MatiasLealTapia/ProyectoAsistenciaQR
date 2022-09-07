import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepErroresPage } from './rep-errores.page';

const routes: Routes = [
  {
    path: '',
    component: RepErroresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepErroresPageRoutingModule {}
