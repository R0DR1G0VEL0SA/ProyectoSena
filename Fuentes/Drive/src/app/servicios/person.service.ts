import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Person } from '../models/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personCollection : AngularFirestoreCollection<Person>;
  private conductores: Observable<Person[]>;

  constructor(db: AngularFirestore) { 
    this.personCollection = db.collection<Person>('conductores');
    this.conductores = this.personCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map (a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};

        });
      }
    ));
  }

  getConductores(){
    return this.conductores;
  }

  getConductor(id){
    return this.personCollection.doc<Person>(id).valueChanges();
  }

  updateConductor(conductor: Person, id){
    return this.personCollection.doc(id).update(conductor);
  }

  addConductor(conductor: Person){
    return this.personCollection.add(conductor);
  }

  removeConductor(id){
    return this.personCollection.doc(id).delete();
  }


}