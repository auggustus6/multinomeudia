import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadosComponent } from './components/resultados/resultados.component';
import { ResultadosCategoriaComponent } from "./components/resultados-categoria/resultados-categoria.component";



const routes: Routes = [
  { path: ':idSexo', component: ResultadosComponent },
  { path: 'resultados-categoria/:idLead', component: ResultadosCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ResultadosRoutingModule {}
