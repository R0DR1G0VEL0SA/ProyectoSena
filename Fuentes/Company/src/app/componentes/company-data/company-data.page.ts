import { Component, OnInit } from '@angular/core';
import { Company } from '../../componentes/company-data/company.models';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../../servicios/auth.service';
import { CompanyService } from '../../componentes/company-data/company.service';
@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.page.html',
  styleUrls: ['./company-data.page.scss'],
})
export class CompanyDataPage implements OnInit {
  private loading: any;
  public companys = new Array<Company>();
  private companySubscription: Subscription;

  constructor(
    private authService: AuthService,
    private CompanyService: CompanyService,
    private loadingCtrl: LoadingController,

  ) {
    this.companySubscription = this.CompanyService.getempresa().subscribe(data => {
    this.companys = data;
}); }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.companySubscription.unsubscribe();
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

}
