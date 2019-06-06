import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public  nit: string;
  public  razon: string;
  public  actividad: string;
  public  name: string;
  public  email: string;
  public  cel: string;
  public  password: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmitRegister(){
    this.auth.register(this.nit, this.razon, this.actividad, this.name, this.email, this.cel, this.password ).then( auth => {
      this.router.navigate(['tabs/tab1']);
      console.log(auth);
    }).catch(err => console.log(err));
  }

}
