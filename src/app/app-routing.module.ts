import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'escolha', pathMatch: 'full' },
  { path: 'escolha', loadChildren: './escolha/escolha.module#EscolhaModule' },
  { path: 'questoes', loadChildren: './questoes/questoes.module#QuestoesModule' },
  { path: 'resultados', loadChildren: './resultados/resultados.module#ResultadosModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
