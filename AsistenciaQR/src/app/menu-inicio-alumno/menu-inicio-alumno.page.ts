import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-inicio-alumno',
  templateUrl: './menu-inicio-alumno.page.html',
  styleUrls: ['./menu-inicio-alumno.page.scss'],
})
export class MenuInicioAlumnoPage implements OnInit {

  dato:any;
  constructor(private menu: MenuController, private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.dato = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.dato);
      }
    })
   }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.menu.close('custom')
  }

}
