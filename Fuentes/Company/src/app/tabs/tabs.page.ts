import { Component } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { AuthService } from '../servicios/auth.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private menu: MenuController, public authservice: AuthService, public alertController: AlertController) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  Onlogout() {
    this.authservice.logout();
    
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '¡Confirmar!',
      message: 'Realmente Deseas<strong> ¡Salir!</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.Onlogout();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
