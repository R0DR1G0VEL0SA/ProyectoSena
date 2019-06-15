import { Component, OnInit } from '@angular/core';

import {Geolocation } from '@ionic-native/geolocation/ngx';

import {  LoadingController } from '@ionic/angular';


///////////////////////////
import { Marcadores } from '../../marcador/marcadores';
import { Storage } from '@ionic/storage';
/////////////////////////////////


declare var google;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {


  mapRef = null;

  marcadores : Marcadores[] = [];
  lat = 4.60972222222;
  lng = -74.0816666667;
  paths: Array<any> = [];
  polygon = false;
  latA : number;
  latB : number;
  lngA : number;
  lngB : number;
  polyline = false;

  constructor(private storage: Storage,
    private geolocation: Geolocation,) { }

  ngOnInit() {
    this.geolocalizacion()
    this.polygon = false;
    this.polyline = false;
    this.storage.get('marker').then((val) => 
    {
      let marcadores : Marcadores = JSON.parse(val);
      for (let i in marcadores)
      {
        this.marcadores.push(marcadores[i]);
        console.log(this.marcadores);
        if(parseInt(i)==1)
        {
          this.paths.push(marcadores[i]);
          this.latA = (marcadores[i].lat);
          this.lngA = (marcadores[i].lng);
        }
        if(parseInt(i)==3)
        {
          this.polygon=true; 
          this.latA = (marcadores[i].lat);
          this.lngA = (marcadores[i].lng);
        }
      /*  if(parseInt(i)==4)
        {
          this.latB = (marcador[4].lat);
          this.lngB = (marcador[4].lng);
          this.polyline = true;
        }*/
      }        
    });
  }

    agregarMarcador(evento){
      this.ingresarMarcador(parseFloat(evento.coords.lat), parseFloat(evento.coords.lng), evento.coords.title, evento.coords.description);
      //Almacenamiento en local storage
      this.storage.set('marker', JSON.stringify(this.marcadores) );
      console.log(this.marcadores.length);
      //Creación del polígono
      // if(this.marcadores.length>=3){
       // this.paths=this.marcadores;
        //this.polygon=true;
      //Creación de la línea
     

   //for(this.marcadores.length==1; this.marcadores.length >=3; this.marcadores.length++){

      if(this.marcadores.length==1)
        {
          this.latA = parseFloat(evento.coords.lat);
          this.lngA = parseFloat(evento.coords.lng);
        }
       if(this.marcadores.length==2)
       {

       // google.maps.TravelMode.DRIVING
         this.latB = parseFloat(evento.coords.lat);
         this.lngB = parseFloat(evento.coords.lng);
         this.polyline = true;
       }

       if(this.marcadores.length==3)
       {

       // google.maps.TravelMode.DRIVING
       this.marcadores.length=0;
       this.polyline = false;
      
       }
    //  }
  //  }
   
  }

  ingresarMarcador(lat, lng, title, description){
    const nuevoMarcador = new Marcadores(lat, lng, title, description);
    //const nuevoMarcador = new Marcador();
    this.marcadores.push(nuevoMarcador);
  }


async geolocalizacion(){
  const myLatLng= await this.getLocation();
  const mapEle: HTMLElement = document.getElementById('map');
  this.mapRef = new google.maps.Map(mapEle, {
    center: myLatLng,
    zoom:12
  }); 
  
}

private async getLocation(){
  const rta = await this.geolocation.getCurrentPosition();
  return {
    lat: rta.coords.latitude,
    lng: rta.coords.longitude
  };

  
  
    }  
  
}
