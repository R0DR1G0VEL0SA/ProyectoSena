import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDZaEUa1IncX9fu-rCWdWtQ7Gwu6w6039c',
      authDomain: 'logistics-e6411.firebaseapp.com',
      databaseURL: 'https://logistics-e6411.firebaseio.com',
      projectId: 'logistics-e6411',
      storageBucket: 'logistics-e6411.appspot.com',
      messagingSenderId: '48723981258',
      appId: '1:48723981258:web:1997f47ad56a0e63'
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    IonicStorageModule.forRoot({
      name: 'coordenadas',
      driverOrder: ['indexeddb']
    })
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: FirestoreSettingsToken, useValue: {}}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
