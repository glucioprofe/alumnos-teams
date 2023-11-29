
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.sass']
})
export class GruposComponent implements OnInit {

  nombreAlumno!: string;
  grupoSeleccionado!: string;
  grupos: any[] = [
    { nombre: 'grupo1', alumnos: [] },
    { nombre: 'grupo2', alumnos: [] }
  ];

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    const datos = JSON.parse(localStorage.getItem('grupos') || '{}');
    if (datos.grupo1 && datos.grupo2) {
      this.grupos[0].alumnos = datos.grupo1;
      this.grupos[1].alumnos = datos.grupo2;
    }
  }

  agregarAlumno() {
    if (this.grupoSeleccionado && this.nombreAlumno) {
      const grupo = this.grupos.find(g => g.nombre === this.grupoSeleccionado);
      grupo.alumnos.push(this.nombreAlumno);
      this.nombreAlumno = '';
      this.guardarDatos();
    }
  }

  eliminarAlumno(grupoNombre: string, alumno: string) {
    const grupo = this.grupos.find(g => g.nombre === grupoNombre);
    const index = grupo.alumnos.indexOf(alumno);
    if (index > -1) {
      grupo.alumnos.splice(index, 1);
      this.guardarDatos();
    }
  }

  guardarDatos() {
    const datos = {
      grupo1: this.grupos[0].alumnos,
      grupo2: this.grupos[1].alumnos
    };
    localStorage.setItem('grupos', JSON.stringify(datos));
  }
}
