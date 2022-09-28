import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuInicioAlumnoPage } from './menu-inicio-alumno.page';
import { SlideMenuComponent } from '../slide-menu/slide-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuInicioAlumnoPage,
    children:[
      {
        path: 'slide-menu',
        component: SlideMenuComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuInicioAlumnoPageRoutingModule {}
