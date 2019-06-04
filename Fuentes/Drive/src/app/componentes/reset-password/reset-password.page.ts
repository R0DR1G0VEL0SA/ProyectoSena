import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component ({ selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  public user: string;


  constructor(private navCtrl: NavController, private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  pushRoleNavCtl() {
    this.navCtrl.navigateForward('/role');
  }

  resetPassword() {
    this.authService.getPassword(this.user).then(res => {
      this.router.navigate(['/login']);
       }).catch(err => alert('El correo ingresado no existe'));

  }

}
