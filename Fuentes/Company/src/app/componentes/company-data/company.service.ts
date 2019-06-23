import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Company } from '../../componentes/company-data/company.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private personCollection : AngularFirestoreCollection<Company>;
  private empresas: Observable<Company[]>;

  constructor(db: AngularFirestore) { 
    this.personCollection = db.collection<Company>('empresas');
    this.empresas = this.personCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map (a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};

        });
      }
    ));
  }

  getempresa(){
    return this.empresas;
  }

  getEmpresas(id){
    return this.personCollection.doc<Company>(id).valueChanges();
  }

  updateEmpresas(empresas: Company, id){
    return this.personCollection.doc(id).update(empresas);
  }

  addEmpresas(empresas: Company){
    return this.personCollection.add(empresas);
  }

  removeEmpresas(id){
    return this.personCollection.doc(id).delete();
  }


}