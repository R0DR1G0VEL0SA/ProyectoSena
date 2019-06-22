import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../models/servicio';
import { ServicioService } from '../../componentes/tab1/servicio.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController} from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import {Geolocation } from '@ionic-native/geolocation/ngx';

import { Marcadores } from '../../componentes/detail-tab1/marcadores';
import { Storage } from '@ionic/storage';


declare var google;
@Component({
  selector: 'app-detail-tab1',
  templateUrl: './detail-tab1.page.html',
  styleUrls: ['./detail-tab1.page.scss'],
})
export class DetailTab1Page implements OnInit {
  servicio: Servicio;
  servicioId: Servicio;

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





  constructor(private route: ActivatedRoute,
              private storage: Storage,
              private geolocation: Geolocation,
              private nav: NavController,
              private servicioService: ServicioService,
              private loadingController: LoadingController,
              public actionSheetController: ActionSheetController) { }

  ngOnInit() {

    this.servicioId = this.route.snapshot.params['id'];
    if (this.servicioId) {
      this.loadServicio();
      console.log(this.servicioId);
    }


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

  async loadServicio() {
    const loading =  await this.loadingController.create({
      message: 'Espere....'
    });
    await loading.present();
    this.servicioService.getServicio(this.servicioId).subscribe(servicio=> {
      loading.dismiss();
      this.servicio = servicio;
      console.log(servicio.id);
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Detalle del servicio de carga',

      buttons: [{
        text: 'Empresa :'+ ' '+ this.servicio.nombre,
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
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
