import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolhaComponent } from './components/escolha/escolha.component';

const routes: Routes = [{ path: '', component: EscolhaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolhaRoutingModule {}
