import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.sass']
})
export class JuegoComponent implements OnInit  {

  estudiantesGrupo1: string[] = [];
  estudiantesGrupo2: string[] = [];
  estudianteSeleccionado: any = null;
  mostrarTemporizador = false;
  temporizadorOffset = 125.6; // Circunferencia completa del círculo
  intervalo: any;


  preguntas: string[] = [];
  preguntaActual: string | null = null;
  indicePreguntaActual: number = 0;
  tiempoRestante!: Date;
  intervaloTemporizador: any;

  temporizadorFinalizado: boolean = false;
  puntajes = { grupo1: 0, grupo2: 0 };

  constructor(){}
  ngOnInit(): void {
    this.cargarEstudiantes();
    this.cargarPreguntas();
  }
  cargarEstudiantes() {
    const estudiantesGuardados = localStorage.getItem('grupos');
    if (estudiantesGuardados) {
      console.log("Ok, ", estudiantesGuardados)
      const estudiantes = JSON.parse(estudiantesGuardados);
      this.estudiantesGrupo1 = estudiantes.grupo1;
      this.estudiantesGrupo2 = estudiantes.grupo2;
    }
  }
  cargarPreguntas() {
    const preguntasGuardadas = localStorage.getItem('preguntas');
    if (preguntasGuardadas) {
      this.preguntas = JSON.parse(preguntasGuardadas);
    }
  }
  sortearEstudiante() {
    let contador = 0;
    this.mostrarTemporizador = true;
    this.intervalo = setInterval(() => {
      contador++;
      this.estudianteSeleccionado = {
        grupo1: this.estudiantesGrupo1[Math.floor(Math.random() * this.estudiantesGrupo1.length)],
        grupo2: this.estudiantesGrupo2[Math.floor(Math.random() * this.estudiantesGrupo2.length)]
      };
      this.temporizadorOffset = 125.6 - (contador * 12.56); // Ajustar la velocidad de disminución

      if (contador >= 10) { // Termina después de 10 iteraciones
        clearInterval(this.intervalo);
        this.mostrarTemporizador = false;
        this.temporizadorOffset = 125.6; // Resetear para el próximo sorteo
        this.mostrarPregunta();
      }
    }, 100); // Intervalo de tiempo entre cambios
  }

  mostrarPregunta() {
    if (this.indicePreguntaActual < this.preguntas.length) {
      this.preguntaActual = this.preguntas[this.indicePreguntaActual];
      this.indicePreguntaActual++;
      this.iniciarTemporizador();
    } else {
      // Manejar fin de las preguntas
      this.preguntaActual = null;
    }
  }

  iniciarTemporizador() {
    // Inicializa el tiempo restante en 5 minutos
    this.tiempoRestante = new Date();
    this.tiempoRestante.setMinutes(0);
    this.tiempoRestante.setSeconds(5);

    if (this.tiempoRestante .getMinutes() === 0 && this.tiempoRestante .getSeconds() === 0) {
      clearInterval(this.intervaloTemporizador);
      this.temporizadorFinalizado = true; // Indica que el temporizador ha finalizado
    }

    this.intervaloTemporizador = setInterval(() => {
      const tiempo = new Date(this.tiempoRestante.getTime() - 1000);
      this.tiempoRestante = tiempo;

      if (tiempo.getMinutes() === 0 && tiempo.getSeconds() === 0) {
        clearInterval(this.intervaloTemporizador);
        // Opcional: Mostrar la siguiente pregunta automáticamente
        this.mostrarPregunta();
      }
    }, 1000);

  }

  asignarPunto(grupo: 'grupo1' | 'grupo2') {
    this.puntajes[grupo]++;
    this.preguntaActual = null;
    this.temporizadorFinalizado = false;
  }
}
