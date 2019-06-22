import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  constructor(public db: AngularFirestore) { }

  crearServicio(servicio) {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('servicios').add({
        origen: servicio.origen,
        destino: servicio.destino,
        fechainicio: servicio.fechainicio,
        fechafinal: servicio.fechafinal,
        ciudadinicio: servicio.ciudadinicio,
        ciudadfinal: servicio.ciudadfinal,
        flete: servicio.flete,
        evento: servicio.evento,
        estado: servicio.estado,
        nombre: servicio.nombre,
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
}
