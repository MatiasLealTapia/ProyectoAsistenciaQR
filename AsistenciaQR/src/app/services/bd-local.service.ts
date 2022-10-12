import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController: ToastController) {
    
   }
}
