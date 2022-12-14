import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-menu-inicio-alumno',
  templateUrl: './menu-inicio-alumno.page.html',
  styleUrls: ['./menu-inicio-alumno.page.scss'],
})
export class MenuInicioAlumnoPage implements OnInit {

  today:any;
  dato:any;
  code:any;
  constructor(private loadingController: LoadingController, private barcodeScanner: BarcodeScanner, private menu: MenuController, private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.dato = this.router.getCurrentNavigation().extras.state.user;
        this.router.navigate(['menu-inicio-alumno/slide-menu'])
      }
    })
  }


  barCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode Data', this.code)
    }).catch(err => {
      console.log('Error', err);
    })
  }
   
  ngOnInit() {
    this.loadingController.dismiss();
    this.today = Date.now()
  }

  ionViewWillLeave() {
    this.menu.close('custom');
  }

  segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value
    this.router.navigate(['menu-inicio-alumno/'+direction])
  }

}
