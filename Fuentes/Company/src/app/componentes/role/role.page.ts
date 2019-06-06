import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-role',
  templateUrl: './role.page.html',
  styleUrls: ['./role.page.scss'],
})
export class RolePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  pushRegisterNavCtl() {
    this.navCtrl.navigateForward('/register');
  }

}
