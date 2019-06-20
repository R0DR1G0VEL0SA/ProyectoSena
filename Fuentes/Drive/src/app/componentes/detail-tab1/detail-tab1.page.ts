import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../models/servicio';
import { ServicioService } from '../../componentes/tab1/servicio.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-detail-tab1',
  templateUrl: './detail-tab1.page.html',
  styleUrls: ['./detail-tab1.page.scss'],
})
export class DetailTab1Page implements OnInit {
  servicio: Servicio;
  servicioId: Servicio;

  constructor(private route: ActivatedRoute,
              private nav: NavController,
              private servicioService: ServicioService,
              private loadingController: LoadingController) { }

  ngOnInit() {

    this.servicioId = this.route.snapshot.params['id'];
    if (this.servicioId) {
      this.loadServicio();
      console.log(this.servicioId);
    }
  }

  async loadServicio() {
    const loading =  await this.loadingController.create({
      message: 'Espere....'
    });
    await loading.present();
    this.servicioService.getServicio(this.servicioId).subscribe(servicio=> {
      loading.dismiss();
      this.servicio = servicio;
    });
  }

}
