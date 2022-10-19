import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { CacheService } from "ionic-cache";

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss'],
})
export class SlideMenuComponent implements OnInit {
  
  nombre:any;
  constructor(private cache: CacheService, private router: Router, private menu: MenuController) {
  }

  ngOnInit() {
    let key = 'nomUsuario';
    this.nombre = this.cache.getRawItem(key);
    console.log(this.nombre)
  }

  ionViewWillLeave() {
    this.menu.close('custom')
  }

  rutearHacia(url){
    this.router.navigate([url]);
  }

}
