import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  nombre : string;
  direccion : string;
  telefono : number;

  constructor() { 
    this.nombre = "Jorge Pando Jimeno"
    this.direccion = "C/ Doctor Marañón, 2, Torre 1, 3ºD, 10002, Cáceres"
    this.telefono = 675913084
  }

  ngOnInit() {
  }

}