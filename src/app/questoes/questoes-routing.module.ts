import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestoesComponent } from "./components/questoes/questoes.component";


const routes: Routes = [
  { path: ':idSexo', component: QuestoesComponent },
  { path: 'categoria/:idSexo/:idCategoria', component: QuestoesComponent },
  // { path: 'questoes-categoria', component: }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuestoesRoutingModule {}
