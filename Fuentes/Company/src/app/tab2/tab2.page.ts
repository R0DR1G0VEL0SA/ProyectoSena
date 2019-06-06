import { Component, OnInit } from '@angular/core';
import {Geolocation } from '@ionic-native/geolocation/ngx';
import {  LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  mapRef = null;

  constructor(
    private geolocation: Geolocation,
    private loadCtrl: LoadingController
  ) {

  }
  
  //se crea un metodo encargado de cargar el mapa
  ngOnInit(){
     
  }
  

}