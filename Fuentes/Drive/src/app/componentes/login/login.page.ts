import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Route, Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component ({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string;
  password: string;

 constructor(private authService: AuthService, public router: Router,
             private navCtrl: NavController,
             private toastController: ToastController) { }

  ngOnInit() {
  }

  OnSubmitLogin() {
    this.authService.login(this.user, this.password).then(res => {
      this.router.navigate(['/tabs/tab1']);
      this.presentToast('Bienvenido a Logistics App');
    }).catch(error => this.presentToast(error)); 
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 4000
    });
    toast.present();
  }

  pushRoleNavCtl() {
    this.navCtrl.navigateForward('/role');
  }
  pushResetNavCtl() {
    this.navCtrl.navigateForward('/reset-password');
  }

}
