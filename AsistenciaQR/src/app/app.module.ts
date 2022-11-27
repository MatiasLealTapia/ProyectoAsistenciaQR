import { NgModule } from '@angular/core';
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
    BarcodeScanner
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
