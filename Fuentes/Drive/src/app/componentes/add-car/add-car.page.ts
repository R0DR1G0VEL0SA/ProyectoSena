import { OnInit, Component } from '@angular/core';
import { TaskI } from '../../models/task.interface';
import { CarService } from '../../servicios/car.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage  {
  carId: any;
  car: TaskI;

  constructor( private route: ActivatedRoute,
               private nav: NavController,
               private carService: CarService,
               private loadingController: LoadingController ) { }

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

}
