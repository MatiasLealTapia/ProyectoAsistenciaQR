import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';
import { IonList, MenuController } from '@ionic/angular';
import { MenuInicioAlumnoPage } from '../menu-inicio-alumno/menu-inicio-alumno.page'

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss'],
})
export class SlideMenuComponent implements OnInit {

  @Input() childMessage: String;
  
  nombre:any;
  constructor(private menu: MenuController, private datos: MenuInicioAlumnoPage) {
    this.nombre=datos.dato.usrnme;
    console.log(this.nombre);
  }

  ngOnInit() {}


  ionViewWillLeave() {
    this.menu.close('custom')
  }

}
