import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscolhaComponent } from './components/escolha/escolha.component';
import { EscolhaRoutingModule } from "./escolha-routing.module";
import { PulseModule } from "../directives/pulse/pulse.module";
import { ModalModule } from "../ui/components/modal/modal.module";


@NgModule({
  declarations: [EscolhaComponent],
  imports: [
    CommonModule,
    PulseModule,
    ModalModule,
    EscolhaRoutingModule
  ]
})
export class EscolhaModule { }
