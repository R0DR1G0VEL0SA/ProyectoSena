import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { TaskI} from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsCollection : AngularFirestoreCollection<TaskI>;
  private cars: Observable<TaskI[]>;

  constructor(db: AngularFirestore) { 
    this.carsCollection = db.collection<TaskI>('cars');
    this.cars = this.carsCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map (a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};

        });
      }
    ));
  }

  getCars(){
    return this.cars;
  }

  getCar(id){
    return this.carsCollection.doc<TaskI>(id).valueChanges();
  }

  updateCar(car: TaskI, id){
    return this.carsCollection.doc(id).update(car);
  }

  addCar(car: TaskI){
    return this.carsCollection.add(car);
  }

  removeCar(id){
    return this.carsCollection.doc(id).delete();
  }


}
