import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  login(user: string, password: string) {
// tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, rejected) => {
// tslint:disable-next-line: no-shadowed-variable
      this.AFauth.auth.signInWithEmailAndPassword(user, password).then(user => {
       resolve(user);
      }).catch(err => rejected('error: ' + err));
    });
  }

  getPassword(user: string) {
    return new Promise((resolve, rejected) => {
      this.AFauth.auth.sendPasswordResetEmail(user).then(() => {
        resolve(true);
      })
      .catch(err => rejected(err));
    });
  }

  logout() {
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }

  register(user: string, password: string, firstName: string, lastName: string, cel: string, city: string) {

    return new Promise ((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(user, password).then( res => {
          // console.log(res.user.uid);
        const uid = res.user.uid;
        this.db.collection('conductores').doc(uid).set({
            nombres : firstName,
            apellidos: lastName,
            correo: user,
            contrasena: password,
            celular: cel,
            direccion: city,
            uiid : uid,
            rol: 1
          });

        resolve(res);
      }).catch( err => reject(err));
    });


  }
}
