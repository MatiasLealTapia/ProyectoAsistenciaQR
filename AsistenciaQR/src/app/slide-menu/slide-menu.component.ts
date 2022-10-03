import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';
import { IonList, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss'],
})
export class SlideMenuComponent implements OnInit {


  @Input() childMessage: String;

  constructor(private menu: MenuController) { 
    console.log(this.childMessage);
  }

  ngOnInit() {}


  ionViewWillLeave() {
    this.menu.close('custom')
  }

}
