import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Servicio2Service} from '../tab2/servicio2.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Servicio } from 'src/app/models/servicio';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  private loading: any;
  public servicios = new Array<Servicio>();
  private serviciosSubscription: Subscription;

  constructor(public authservice: AuthService,
    private loadingCtrl: LoadingController,
    private servicioService: Servicio2Service,
    private toastCtrl: ToastController) 
    {
      this.serviciosSubscription = this.servicioService.getServicios().subscribe(data => {
        data.forEach(element => {
          console.log("T: "+element.estado);
          if(element.estado.toString() === "2" )
          { 
            
            this.servicios.push(element);
          }
        });
          console.log()
        })  
    }

  ngOnInit() {}

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