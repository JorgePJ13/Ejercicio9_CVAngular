import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  fecha_Nac : string;
  dni : string;
  email : string;
  github : string;
  bach_Fecha : string;
  informatica_Fecha : string;
  carnet_Coche : string;
  ingles : string;
  practicas : string;
  deportes : string;
  cine : string;
  series : string;
  videojuegos : string;
  tiempo_Libre : string;

  constructor() {
    this.fecha_Nac = "5/09/1998";
    this.dni = "45969027-P";
    this.email = "jpandojimeno@gmail.com"
    this.github = "@JorgePJ13"
    this.bach_Fecha = "(2014-2016)";
    this.informatica_Fecha = "(2017-Actualidad)";
    this.carnet_Coche = "(2020)";
    this.ingles = "(2016)";
    this.practicas = "Madrid (remoto)";
    this.deportes = "Fútbol, pádel, gimnasio..."
    this.cine = "El Señor de los Anillos, Interstellar, El Club de la Lucha..."
    this.series = "Juego de Tronos, Breaking Bad, Dark..."
    this.videojuegos = "The Last of Us, Grand Theft Auto, Red Dead Redemption, Uncharted..."
    this.tiempo_Libre = "Salir a tomar unas cañas, senderismo con amigos, playa..."
  }

  ngOnInit() {
  }

}