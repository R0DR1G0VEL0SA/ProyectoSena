import { Injectable } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Servicio } from '../../models/servicio';
import { Subscription, Observable } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Servicio2Service {
  private servicioCollection : AngularFirestoreCollection<Servicio>;
  private servicios: Observable<Servicio[]>;

  constructor(db: AngularFirestore) {
    this.servicioCollection = db.collection<Servicio>('servicios');
    this.servicios = this.servicioCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map (a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
   }
   getServicios(){
    return this.servicios;
  }


}
