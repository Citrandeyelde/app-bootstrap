import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-pipes.component.html',
  styleUrl: './form-pipes.component.css'
})
export class FormPipesComponent {
  mostrarResultado=0
  fechaActual= new Date()
  alumnos=[
    {nombre:"Ugaz"},
    {nombre:"Gamarra"},
    {nombre:"Rojas"},
    {nombre:"Carbajo"},
    {nombre:"Polleri"}
  ]
  curso=[
    {nombre:"Desarrollo Web", profesor:"Damaso Lopez",precio:2500},
    {nombre:"Proyecto Certificador", profesor:"Marco Villa",precio:1500},
    {nombre:"Ingles Tecnico", profesor:"Maria Chavez",precio:2500},
    {nombre:"Servicios Web 1", profesor:"Silfrido Alva",precio:500}
  ]
  mostrarAlumnos(){
    this.mostrarResultado =1
  }
  mostrarCursos(){
    this.mostrarResultado =0
  }
}
