import { Component, OnInit } from '@angular/core';
import { TaskI} from '../../models/task.interface';
import {CarService} from '../../servicios/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  public cars = new Array<TaskI>();

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(res => {this.cars = res });
  
  }
}
