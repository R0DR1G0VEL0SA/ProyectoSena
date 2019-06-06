import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Route, Router} from '@angular/router';
import { NavController } from '@ionic/angular';

@Component ({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string;
  password: string;

 constructor(private authService: AuthService, public router: Router,
             private navCtrl: NavController) { }

  ngOnInit() {
  }

  OnSubmitLogin() {
    this.authService.login(this.user, this.password).then(res => {
      this.router.navigate(['/tabs/tab1']);
    }).catch(err => alert('datos incorrectos'));
  }

  pushRoleNavCtl() {
    this.navCtrl.navigateForward('/role');
  }
  pushResetNavCtl() {
    this.navCtrl.navigateForward('/reset-password');
  }

}
