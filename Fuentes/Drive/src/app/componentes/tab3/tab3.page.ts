import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Servicio3Service} from '../tab3/servicio3.service';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit {
  private loading: any;
  public servicios = new Array<Servicio>();
  private serviciosSubscription: Subscription;

  constructor(public authservice: AuthService,
    private loadingCtrl: LoadingController,
    private servicioService: Servicio3Service,
    private toastCtrl: ToastController) 
    {
      this.serviciosSubscription = this.servicioService.getServicios().subscribe(data => {
        data.forEach(element => {
          if(element.estado.toString() === "3" )
          { 
            this.servicios.push(element);
            console.log("id: "+ element.nombre);
          }
        });
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
