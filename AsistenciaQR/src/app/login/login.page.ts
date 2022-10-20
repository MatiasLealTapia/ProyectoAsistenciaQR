import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
  

  constructor(private cache: CacheService, private api: ApiService, public bdlocalservice: BdLocalService, private router: Router, private alertController: AlertController) {
    cache.setDefaultTTL(60 * 60);
    this.router.navigate(['login/recuperar-password'])
  }
  ionViewWillEnter(){
    this.getUsuarios();
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
      this.api.getUsuario(this.usuario.value.usrnme).subscribe((data)=>{
        console.log(data[0])
        this.user=data[0];
        if (data[0].password == this.usuario.value.contrasenna){
          let navigationExtras: NavigationExtras = {
            state: {user: data[0]}
            };
            let key = 'nomUsuario';
            this.cache.saveItem(key,data[0].username);
            this.router.navigate(['/menu-inicio-alumno'],navigationExtras);
            this.guardar();
          } else {
            this.presentAlert()
          }
      });
    }else{
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
