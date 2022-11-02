import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { QuestoesService } from "src/app/questoes/services/questoes.service";

import { Inject} from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';


const _window:any = window;

const _document:any = document;


@Component({
  selector: 'app-resultados-categoria',
  templateUrl: './resultados-categoria.component.html',
  styleUrls: ['./resultados-categoria.component.scss']
})
export class ResultadosCategoriaComponent implements OnInit {

  isScroll = true;

  scrollHeight = _window.pageYOffset;

  idLead: number;

  solicitarSuporte = true;

  hasEmail = false;

  boxCompartilhado = false;

  urlWhats:string;

  formEnviado = false;

  textoValidacao = 'Algo de errado aconteceu, tente novamente';

  resultados = [];

  txtCarregando = 'Carregando dados...'

  carregando = true;

  constructor(
    private activedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    private questionService: QuestoesService) {
    this.idLead = this.activedRoute.snapshot.params.idLead; 
  
  }

  scrollEvent = (event: any): void => {
    const number = event.srcElement.scrollingElement.scrollTop;
    if(number > 300) this.isScroll = false;
    else this.isScroll = true;
  }




  ngOnInit() {
    _window.addEventListener('scroll', this.scrollEvent, true)
    _window.scrollTo(0, 0);
    this.carregarResultados(this.idLead);
    this.urlWhats = `https://api.whatsapp.com/send?text=Acabei de fazer o mapeamento de perfil da MultiFórmulas! Acredito que você vai gostar também! Clique aqui: http://multinomeudia.com.br`;
  }

  scrollToBottom(): void {
    try {
      _window.scrollTo(0,300)
      this.isScroll = false;
    } catch(err) { }                 
}

  sharedPdf = () => {
    _window.compartilhar();
  }


  enviarLead(form) {
    const sexo = JSON.parse(localStorage.getItem('sexo'));
    if (form.valid) {
      const formValue = form.getRawValue();
      this.questionService.putLead(this.idLead, formValue)
        .subscribe(response => {
          this.formEnviado = true;
          this.textoValidacao = 'Formulário enviado com sucesso. Enviamos um e-mail com seu resultado!';
          this.solicitarSuporte = true;
          if(sexo == 1){
            _window.gtag('event', 'page', { 'event_category': 'Load', 'event_label': 'Homem Resultados' });
          } else {
            _window.gtag('event', 'page', { 'event_category': 'Load', 'event_label': 'Mulher Resultados' });
          }
        }, err => {
          console.log(err);
          this.formEnviado = true;
          setTimeout(() => {
            this.formEnviado = false;
          }, 2000);
        });
    }
  }

  carregarResultados(idLead) {
    const sexo = JSON.parse(localStorage.getItem('sexo'));
    this.questionService.getResultados(idLead)
      .subscribe(response => {
        this.carregando = false;
        this.resultados = response;
        if(sexo == 1){
            _window.gtag('event', 'page', { 'event_category': 'Load', 'event_label': 'Homem Resultados' });
        } else {
          _window.gtag('event', 'page', { 'event_category': 'Load', 'event_label': 'Mulher Resultados' });
        }
      }, err => {
        this.txtCarregando = 'Algo ocorreu. Tente novamente mais tarde!'
      });
  }

  enviarAnalitycs(){
    const sexo = JSON.parse(localStorage.getItem('sexo'));
    if(sexo == 1){
      _window.gtag('event', 'click', { 'event_category': 'Button', 'event_label': 'Homem Whatsapp GliSODin' });

    } else {
      _window.gtag('event', 'click', { 'event_category': 'Button', 'event_label': 'Mulher Whatsapp GliSODin' });
    }
  }

  
  copyInputRede(val:string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.boxCompartilhado = true;

    setTimeout(()=>{this.boxCompartilhado = false}, 1000)
  }

}
