import { Component, OnInit } from '@angular/core';
import { TaskI} from '../../models/task.interface';
import {CarService} from '../../servicios/car.service';


@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.page.html',
  styleUrls: ['./trailer.page.scss'],
})
export class TrailerPage implements OnInit {
  cars: TaskI[];

  constructor( private carService: CarService ) { }

  ngOnInit() {
    this.carService.getCars().subscribe(res =>{
      console.log('Tareas', res);
    });
  }

}
