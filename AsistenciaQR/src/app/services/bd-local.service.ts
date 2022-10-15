import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  usuario: Iuser[]=[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController: ToastController) {
    this.init();
    this.cargarUsuarios();
    let userList=this.cargarUsuarios();
    console.log(userList);
  }

  guardarUsuario(username:string, password:string){
    //creo una consulta lambda para saber si este nuevo contacto no existe ya
    const existe= this.usuario.find(c=>c.strUsrnme===username);
    if (!existe) {
      this.usuario.unshift({strUsrnme:username,strPass:password})
      this._storage.set('usuario',this.usuario);
      this.presentToast("Usuario registrado")
    } else {
      this.presentToast("Usuario ya ha sido registrado con anterioridad.")
    }
  }

  async cargarUsuarios() {
    // const usuarios=await this.storage.get('usuario');
    // if (usuarios) {
    //   this.usuario=usuarios;
    // }
    return this.storage.get("usuario") || [];
  }

  listarUsuarios(){
    let listado = [];
    this.storage.forEach((v,k) => {listado.push(v); })
    return listado;
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
