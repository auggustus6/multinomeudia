import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrosValidacaoComponent } from './erros-validacao.component';

@NgModule({
  declarations: [ErrosValidacaoComponent],
  imports: [
    CommonModule
  ],
  exports:[ErrosValidacaoComponent]
})
export class ErrosValidacaoModule { }
