import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = new FormGroup({
    usrnme: new FormControl('', [Validators.required, Validators.minLength(3)]),
    contrasenna: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  // LoginProgrBar() {
  //   const progrBar = document.getElementById('#progrBar');
  //   progrBar.style.display="block";
  // }

  guardarDatos(){
    console.log(this.usuario.value);
    if (this.usuario.valid){
      let navigationExtras: NavigationExtras = {
        state: {user: this.usuario.value}
        };
        this.router.navigate(['/menu-inicio-alumno'],navigationExtras);
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

}
