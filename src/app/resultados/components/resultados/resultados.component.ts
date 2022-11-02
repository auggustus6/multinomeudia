import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { QuestoesService } from "src/app/questoes/services/questoes.service";
import { Categoria } from "src/app/models/categorias.interface";

const _window:any = window;

@Component({
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  classObject = '1';

  categoriaMaior: any;

  idSexo: any;

  carregando = true;

  categorias: Categoria[];

  constructor(
    private route: Router,
    private rotaAtiva: ActivatedRoute,
    private questionService: QuestoesService) {
    this.idSexo = this.rotaAtiva.snapshot.params.idSexo;
  }

  ngOnInit() {
    this.carregarCategorias();
  }


  obterCategoriaMaior(array) {
    var ocorrencias = {};

    for (let i = 0; i < array.length; i++) {
      ocorrencias[array[i].id] = 1 + (ocorrencias[array[i].id] || 0);
    }

    let maior = null;
    let ocorrenciasMaior = -1;

    for (let p in ocorrencias) {
      if (ocorrencias[p] > ocorrenciasMaior) {
        maior = p;
        ocorrenciasMaior = ocorrencias[p];
      }
    }

    this.categoriaMaior = parseInt(maior);
  }

  selecionarCategoria(idSexo,idCategoria){
    if(idSexo == 1 && idCategoria === 3){
      _window.gtag('event', 'click', { 'event_category': 'Button', 'event_label': 'Homem Desempenho Físico' });
    }
    else if(idSexo == 1 && idCategoria === 4){
      _window.gtag('event', 'click', { 'event_category': 'Button', 'event_label': 'Homem Emagrecimento' });
    }
    else if(idSexo == 1 && idCategoria === 5){
      _window.gtag('event', 'click', { 'event_category': 'Button', 'event_label': 'Homem Beleza' });
    }
    else if(idSexo == 1 && idCategoria === 7){
      _window.gtag('event', 'click', { 'event_category': 'Button', 'event_label': 'Homem Longevidade' });
    }


    else if(idSexo == 2 && idCategoria === 3){
      _window.gtag('event', 'click', { 'event_category': 'Button', 'event_label': 'Mulher Desempenho Físico' });
    }
    else if(idSexo == 2 && idCategoria === 4){
      _window.gtag('event', 'click', { 'event_category': 'Button', 'event_label': 'Mulher Emagrecimento' });
    }
    else if(idSexo == 2 && idCategoria === 5){
      _window.gtag('event', 'click', { 'event_category': 'Button', 'event_label': 'Mulher Beleza' });
    }
    else {
      _window.gtag('event', 'click', { 'event_category': 'Button', 'event_label': 'Mulher Longevidade' });
    }
  }

  carregarCategorias() {

    const categorias = JSON.parse(localStorage.getItem('categorias'));
    this.obterCategoriaMaior(categorias);

    let sexo = '1';
    if (localStorage.getItem('sexo')) {
      sexo = localStorage.getItem('sexo');

      if (sexo == '1') {
        this.classObject = 'styleMasculino';
      } else {
        this.classObject = 'styleFeminino';
      }
    } else {
      this.route.navigate(['/escolha']);
    }

    this.questionService.getCategorias()
      .subscribe(categorias => {
        this.categorias = categorias;
        this.carregando = false;
      });
  }
}
