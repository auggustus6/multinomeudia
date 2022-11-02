import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { QuestoesRoutingModule } from "./questoes-routing.module";
import { TimeLineModule } from "../ui/components/time-line/time-line.module";
import { PulseModule } from "../directives/pulse/pulse.module";
import { QuestoesComponent } from './components/questoes/questoes.component';
import { FormComponentResultado } from "./components/questoes/components/formR1/form.component";
import { NgxPhoneMaskBrModule } from 'ngx-phone-mask-br';
import { NgxMaskModule } from 'ngx-mask'
import { ErrosValidacaoModule } from "../ui/components/erros-validacao/erros-validacao.module";
import { CarregandoModule } from "../ui/components/carregando/carregando.module";
import { BannerTopicoModule } from "../ui/components/banner-topicos/banner-topicos.module";
import { AjudaModule } from '../ui/components/botaoAjuda/ajuda.module';

@NgModule({
  declarations: [QuestoesComponent, FormComponentResultado],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AjudaModule,
    NgxPhoneMaskBrModule,
    NgxMaskModule.forRoot(),
    ErrosValidacaoModule,
    CarregandoModule,
    BannerTopicoModule,
    PulseModule,
    QuestoesRoutingModule,
    TimeLineModule
  ]
})
export class QuestoesModule { }
