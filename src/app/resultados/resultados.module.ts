import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ResultadosRoutingModule } from "./resultados-routing.module";
import { FormComponent } from "./components/formR2/form.component";
import { ResultadosComponent } from './components/resultados/resultados.component';
import { ResultadosCategoriaComponent } from './components/resultados-categoria/resultados-categoria.component';
import { CardsCategoriasModule } from "../ui/components/cards-categorias/cards-categorias.module";
import { BannerCategoriaComponent } from "./components/banner-categoria/banner-categoria.component";
import { PulseModule } from "../directives/pulse/pulse.module";
import { BannerTopicoModule } from '../ui/components/banner-topicos/banner-topicos.module';
import { CarregandoModule } from "../ui/components/carregando/carregando.module";
import { ErrosValidacaoModule } from "../ui/components/erros-validacao/erros-validacao.module";
import { AjudaModule } from '../ui/components/botaoAjuda/ajuda.module';
import { NgxPrintModule } from 'ngx-print';
import { SaibaMaisModule } from '../ui/components/saiba-mais/saiba-mais.module';



@NgModule({
  declarations: [
    ResultadosComponent,
    ResultadosCategoriaComponent, 
    BannerCategoriaComponent, 
    FormComponent,
  ],
  imports: [
    CommonModule,
    AjudaModule,
    SaibaMaisModule,
    NgxPrintModule,
    ReactiveFormsModule,
    ResultadosRoutingModule,
    CardsCategoriasModule,
    BannerTopicoModule,
    PulseModule,
    ErrosValidacaoModule,
    CarregandoModule
  ]
})
export class ResultadosModule { }
