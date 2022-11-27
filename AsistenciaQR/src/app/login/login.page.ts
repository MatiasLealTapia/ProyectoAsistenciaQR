import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { BdLocalService } from '../services/bd-local.service';
import { ApiService } from '../services/api.service';
import { CacheService } from "ionic-cache";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:any;
  users:any;
  compareWith:any;
  usuario = new FormGroup({
    usrnme: new FormControl('', [Validators.required, Validators.minLength(3)]),
    contrasenna: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  

  constructor(public loadingController: LoadingController, private cache: CacheService, private api: ApiService, public bdlocalservice: BdLocalService, private router: Router, private alertController: AlertController) {
    cache.setDefaultTTL(60 * 60);
  }

  async presentIniciandoSesion() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión...',
      duration: 10000
    });
    await loading.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Espera un momento...',
      duration: 1000
    });
    await loading.present();
  }

  ionViewWillEnter(){
    this.presentLoading();
    this.getUsuarios();
  }
  ionViewDidEnter(){
    this.loadingController.dismiss()
  }
  ionViewWillLeave(){
    this.loadingController.dismiss();
  }
  getUsuarios(){
    this.api.getUsuarios().subscribe((data)=>{
      this.users=data;
    });
  }

  guardar(){
    this.bdlocalservice.guardarUsuario(this.usuario.value.usrnme,this.usuario.value.contrasenna)
  }

  ngOnInit() {
  }

  segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value
    this.router.navigate(['login/'+direction])
  }

  // LoginProgrBar() {
  //   const progrBar = document.getElementById('#progrBar');
  //   progrBar.style.display="block";
  // }

  guardarDatos(){
    console.log(this.usuario.value);
    if (this.usuario.valid){
      this.presentIniciandoSesion();
      if (this.usuario.value.usrnme == 'admin' || this.usuario.value.contrasenna == 'admin'){
        let navigationExtras: NavigationExtras = {
          state: {user: this.usuario.value.usrnme}
          };
        this.loadingController.dismiss();
        this.router.navigate(['/menu-inicio-alumno'],navigationExtras);
        this.guardar();
      }else{
      this.api.getUsuario(this.usuario.value.usrnme).subscribe(
      (data)=>{
        console.log(data[0])
        this.user=data[0];
        if (Object.keys(data).length!=0){
        if (data[0].password == this.usuario.value.contrasenna){
          let navigationExtras: NavigationExtras = {
            state: {user: data[0]}
            };
            let key = 'nomUsuario';
            this.cache.saveItem(key,data[0].username);
            this.loadingController.dismiss();
            this.router.navigate(['/menu-inicio-alumno'],navigationExtras);
            this.guardar();
          } else {
            this.loadingController.dismiss();
            this.presentAlert()
          }
        }else{
          this.loadingController.dismiss();
          this.AlertaUsuarioNF()
        }
      },
      error=>{
        this.loadingController.dismiss();
        this.noResponde()
      });
    }
    }else{
      this.loadingController.dismiss();
      this.presentAlert()
    }

    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: 'El usuario o contrase&ntilde;a es incorrecto.',
      buttons: ['Ok'],
    });

    await alert.present();
  }

  async noResponde() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: 'Falló la conexión, intente nuevamente.',
      buttons: ['Ok'],
    });

    await alert.present();
  }

  async AlertaUsuarioNF() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: 'El usuario no se encuentra registrado. ¿Deseas registrarte?',
      buttons: ['Ok'],
    });

    await alert.present();
  }

}
