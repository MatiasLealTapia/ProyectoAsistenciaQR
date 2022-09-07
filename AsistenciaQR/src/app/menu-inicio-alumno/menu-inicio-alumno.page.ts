import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-inicio-alumno',
  templateUrl: './menu-inicio-alumno.page.html',
  styleUrls: ['./menu-inicio-alumno.page.scss'],
})
export class MenuInicioAlumnoPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.menu.close('custom')
  }

}
