import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepErroresPageRoutingModule } from './rep-errores-routing.module';

import { RepErroresPage } from './rep-errores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepErroresPageRoutingModule
  ],
  declarations: [RepErroresPage]
})
export class RepErroresPageModule {}
