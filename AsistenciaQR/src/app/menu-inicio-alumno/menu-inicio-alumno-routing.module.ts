import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuInicioAlumnoPage } from './menu-inicio-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: MenuInicioAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuInicioAlumnoPageRoutingModule {}
