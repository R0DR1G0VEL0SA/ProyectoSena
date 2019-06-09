import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component ({ selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  public user: string;


  constructor(private navCtrl: NavController, 
              private authService: AuthService, 
              public router: Router,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 4000
    });
    toast.present();
  }

  pushRoleNavCtl() {
    this.navCtrl.navigateForward('/register');
  }

  resetPassword() {
    this.authService.getPassword(this.user).then(res => {
      this.router.navigate(['/login']);
      this.presentToast('Se ha enviado un enlace de recuperación, revisar buzón de entrada!');
       }).catch(err => this.presentToast('El correo ingresado no existe'));

  }

}
