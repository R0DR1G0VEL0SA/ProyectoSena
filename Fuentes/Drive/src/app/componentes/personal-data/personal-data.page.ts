import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Person } from '../../models/person';
import { Subscription } from 'rxjs';
import { PersonService } from '../../servicios/person.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.page.html',
  styleUrls: ['./personal-data.page.scss'],
})
export class PersonalDataPage implements OnInit {
  private loading: any;
  public persons = new Array<Person>();
  private personsSubscription: Subscription;

  constructor(
              private authService: AuthService,
              private loadingCtrl: LoadingController,
              private personService: PersonService,
              private toastCtrl: ToastController
  ) { 

    this.personsSubscription = this.personService.getConductores().subscribe(data => {
      this.persons = data;
  });
  }
  ngOnInit() {}

// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.personsSubscription.unsubscribe();
  }

  async logout() {
    await this.presentLoading();

    try {
      await this.authService.logout();
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

  async removeConductor(id: string) {
    try {
      await this.personService.removeConductor(id);
    } catch (error) {
      this.presentToast('Error al intentar Borrar');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}