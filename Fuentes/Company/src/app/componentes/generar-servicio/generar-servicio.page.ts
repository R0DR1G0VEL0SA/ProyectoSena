import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from '../generar-servicio/servicio1.service';


@Component({
  selector: 'app-generar-servicio',
  templateUrl: './generar-servicio.page.html',
  styleUrls: ['./generar-servicio.page.scss'],
})
export class GenerarServicioPage implements OnInit {

  servicio = {
    origen: '',
    destino: '',
    fechainicio: '',
    fechafinal: '',
    ciudadinicio: '',
    ciudadfinal: '',
    flete: '',
    evento: '',
    estado: '',
    nombre: '',
    direccioninicio: '',
    direccionfinal: '',
    anticipo:'',
    descripcion:'',
    

  }  

  constructor(private Service: Servicio1Service) { }

  ngOnInit() {
  }

  clicBoton() {
    this.Service.crearServicio(this.servicio)
    .then(
      _res => {
        console.log("Se ha guardado el registro");
        this.servicio.origen = '';
        this.servicio.destino = '';
        this.servicio.fechainicio = '';
        this.servicio.fechafinal = '';
        this.servicio.ciudadinicio = '';
        this.servicio.ciudadfinal = '';
        this.servicio.flete = '';
        this.servicio.evento = '';
        this.servicio.estado = '';
        this.servicio.nombre = '';
        this.servicio.direccioninicio = '';
        this.servicio.direccionfinal = '';
        this.servicio.anticipo = '';
        this.servicio.descripcion = '';
      }
    )
  }
  

}
