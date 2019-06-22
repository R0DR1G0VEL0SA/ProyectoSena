import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Servicio } from '../../models/servicio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

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

  getServicio(id){
    return this.servicioCollection.doc<Servicio>(id).valueChanges();
  }
}
