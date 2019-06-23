import { Component, OnInit } from '@angular/core';
import { TaskI } from '../../models/task.interface';
import { CarService } from '../../servicios/car.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.page.html',
  styleUrls: ['./detail-car.page.scss'],
})
export class DetailCarPage implements OnInit {
  car: TaskI;
  carId: null;

  constructor(private route: ActivatedRoute,
              private nav: NavController,
              private carService: CarService,
              private loadingController: LoadingController ) { }
  ngOnInit() {
// tslint:disable-next-line: no-string-literal
    this.carId = this.route.snapshot.params['id'];
    if (this.carId) {
      this.loadCar();
    }
  }
  async loadCar() {
    const loading =  await this.loadingController.create({
      message: 'Espere....'
    });
    await loading.present();
    this.carService.getCar(this.carId).subscribe(car=> {
      loading.dismiss();
      this.car = car;
    });
  }

  async saveCar() {
    const loading = await this.loadingController.create({
      message: 'Guardando....'
    });
    await loading.present();
 
    if (this.carId) {
      this.carService.updateCar(this.car, this.carId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/car');
      });
    } else {
      this.carService.addCar(this.car).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/car');
      });
    }
  }
  async onRemoveCar(idCar: string) {
    this.carService.removeCar(idCar);
  }
}
