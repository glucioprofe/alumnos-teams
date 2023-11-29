import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GruposComponent } from './grupos/grupos.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { JuegoComponent } from './juego/juego.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
      { path: '', component: GruposComponent },
      { path: 'preguntas', component: PreguntasComponent },
      { path: 'juego', component: JuegoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
