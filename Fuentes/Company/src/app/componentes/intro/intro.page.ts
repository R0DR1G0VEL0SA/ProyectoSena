import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage  {

  slides = [
    {
      img: 'assets/icon/LOGO1.png',
      titulo: 'Te damos la Bienvenida a ',
      content1: 'Logistic | HDR',
      content2: 'Servicios de carga disponible'
    },
    {
      img: 'assets/icon/cohete.svg',
      content1: 'Crea tu cuenta!',
    }
  ]

}
