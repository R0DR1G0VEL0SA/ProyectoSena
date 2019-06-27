import {Component, OnInit } from '@angular/core';
import {AuthService } from '../servicios/auth.service';
import {Geolocation } from '@ionic-native/geolocation/ngx';
import { ServicioService } from './servicio.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Servicio } from '../../app/models/servicio';
import { Subscription } from 'rxjs';

declare var google;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  private loading: any;
  public servicios = new Array<Servicio>();
  private serviciosSubscription: Subscription;

  constructor(public authservice: AuthService,
              private loadingCtrl: LoadingController,
              private servicioService: ServicioService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    
    this.serviciosSubscription = this.servicioService.getServicios().subscribe(data => {
      data.forEach(element => {
        if(element.estado.toString() === "1")
        {  
          this.servicios.push(element);
        }
      });
        
      })       
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {this.serviciosSubscription.unsubscribe();}

  async Onlogout() {
    await this.presentLoading();

    try {
      await this.authservice.logout();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Espere...' });
    return this.loading.present();
  }
  

}

