import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.sass']
})
export class PreguntasComponent  implements OnInit {

  textoPregunta: string = '';
  preguntas: string[] = [];

  ngOnInit(): void {
    this.cargarPreguntas();
  }

  cargarPreguntas() {
    const preguntasGuardadas = localStorage.getItem('preguntas');
    if (preguntasGuardadas) {
      this.preguntas = JSON.parse(preguntasGuardadas);
    }
  }

  agregarPregunta() {
    if (this.textoPregunta) {
      this.preguntas.push(this.textoPregunta);
      this.textoPregunta = '';
      this.guardarPreguntas();
    }
  }

  eliminarPregunta(index: number) {
    this.preguntas.splice(index, 1);
    this.guardarPreguntas();
  }

  guardarPreguntas() {
    localStorage.setItem('preguntas', JSON.stringify(this.preguntas));
  }
}
