import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';
import { IonList, MenuController } from '@ionic/angular';
import { BdLocalService } from '../services/bd-local.service';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss'],
})
export class SlideMenuComponent implements OnInit {
  
  nombre:any;
  listData = [];
  constructor(public bdlocalservice: BdLocalService,private router: Router, private menu: MenuController) {
    this.bdlocalservice.init();
    this.bdlocalservice.cargarUsuarios();
    console.log(this.obtenerUsuario());
  }

  ngOnInit() {}

  async obtenerUsuario(){
    this.listData = await this.bdlocalservice.cargarUsuarios();
  }

  ionViewWillLeave() {
    this.menu.close('custom')
  }

  rutearHacia(url){
    this.router.navigate([url]);
  }

}
