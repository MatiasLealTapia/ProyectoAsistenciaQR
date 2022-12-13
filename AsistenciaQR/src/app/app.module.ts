import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';
import { IonicModule, IonicRouteStrategy, isPlatform } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { HttpClientModule } from '@angular/common/http';
import { CacheModule } from "ionic-cache";
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

const getConfig = () => {
  if (isPlatform('iphone') && isPlatform('ios')) {
    return {
      backButtonText: 'Atras',
    }
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(getConfig()),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    CacheModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es'},{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, BarcodeScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}
