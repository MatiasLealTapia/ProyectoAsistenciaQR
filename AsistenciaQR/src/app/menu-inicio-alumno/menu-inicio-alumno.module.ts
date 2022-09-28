import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuInicioAlumnoPageRoutingModule } from './menu-inicio-alumno-routing.module';

import { MenuInicioAlumnoPage } from './menu-inicio-alumno.page';
import { SlideMenuComponent } from '../slide-menu/slide-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MenuInicioAlumnoPageRoutingModule
  ],
  declarations: [MenuInicioAlumnoPage, SlideMenuComponent]
})
export class MenuInicioAlumnoPageModule {}
