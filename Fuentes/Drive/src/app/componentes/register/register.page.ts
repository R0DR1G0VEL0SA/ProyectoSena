import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public  user: string;
  public  firstName: string;
  public  lastName: string;
  public  password: string;
  public  cel: string;
  public  city: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmitRegister(){
    this.auth.register(this.user, this.password, this.firstName, this.lastName, this.cel, this.city).then( auth => {
      this.router.navigate(['tabs/tab1']);
      console.log(auth);
    }).catch(err => console.log(err));
  }

}
