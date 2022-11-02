import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestoesService } from '../../services/questoes.service';
import { Observable, Subscription } from 'rxjs';
import { ModalService } from 'src/app/ui/components/modal/service/modal.service';
import { Questoes } from "src/app/models/questoes.interface";

const _window:any = window;


@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.scss']
})
export class QuestoesComponent implements OnInit {
  iconHover = true;

  classObject: string;

  bannerCategoria: string;

  icone: string;

  perguntaSelecionado = 0;

  inscricao: Subscription;

  selected: number;

  nomeTopico: string;

  previous = 0;

  next = 1;

  idSexo: any;

  idCategoria: any;

  questions: Questoes[] = [];

  questoesGerais = [];

  categoriasGerais = [];

  categoriasSelecionadas = [];

  formR2 = false;

  hideTimeline = true;

  showResultsR1 = false;

  carregando = false;

  txtCarregando = 'Carregando dados...';




  constructor(
    private rotaAtiva: ActivatedRoute,
    private rotaNavegacao: Router,
    private questionService: QuestoesService,
    private modalService: ModalService
  ) {
    this.idSexo = this.rotaAtiva.snapshot.params.idSexo;
    this.idCategoria = this.rotaAtiva.snapshot.params.idCategoria;
  }

  ngOnInit() {
    this.carregarQuestoes();
  }

  carregarQuestoes() {

    localStorage.setItem('sexo', this.idSexo);

    if (this.idSexo === '1') {
      this.classObject = 'styleMasculino';
    } else {
      this.classObject = 'styleFeminino';
    }

    if (!this.idCategoria) {
      this.questionService.getQuestionsBySexo(this.idSexo)
        .subscribe(questoes => {

          if (questoes.length) {
            questoes.forEach(questao => {
              this.questions.push(questao);
            });
            this.bannerCategoria = 'assets/imgs/bannerR1.jpg';
            this.icone = 'fas fa-heartbeat';
            this.nomeTopico = this.questions[0].mpTopico.titulo;
          } else {
            this.txtCarregando = 'Não existe perguntas para esta categoria. Tente novamente!';
            this.rotaNavegacao.navigate(['/escolha']);
          }
        }, err => {
          console.log(err);
          this.txtCarregando = 'Algo ocorreu. Tente novamente mais tarde';
        });
    } else {

      this.questionService.getQuestionsByCategoria(this.idSexo, this.idCategoria)
        .subscribe(questoes => {

          if (questoes.length) {
            questoes.forEach(questao => {
              this.questions.push(questao);
            });

            this.bannerCategoria = this.questions[0].mpCategoria.banner;
            this.icone = this.questions[0].mpCategoria.icone;
            this.nomeTopico = this.questions[0].mpTopico.titulo;

          } else {
            this.txtCarregando = 'Não existe perguntas para esta categoria. Tente novamente!';
          }
        }, err => {
          console.log(err);
          this.txtCarregando = 'Algo ocorreu. Tente novamente mais tarde';
        });
    }
  }

  enviarLeads(form) {
    const sexo = JSON.parse(localStorage.getItem('sexo'));
    if (form.valid) {
      
      const { whatsapp } = form.value;
      localStorage.setItem('tel', whatsapp);

      this.questionService.postLead(form.value)
        .subscribe(response => {
          
          this.rotaNavegacao.navigate(['/resultados/resultados-categoria', response.id]);
          if(sexo == 1){
            _window.gtag('event', 'page', { 'event_category': 'Load', 'event_label': 'Formulário Homem' });
          } else {
            _window.gtag('event', 'page', { 'event_category': 'Load', 'event_label': 'Formulário Mulher' });
          }

        });
    }
  }

  showResults(id: any) {
    const last = this.questions.slice(-1)[0];

    if (this.idCategoria) {
      if (last.id === id) {
        localStorage.setItem('questoesR2', JSON.stringify(this.questoesGerais));
        this.showResultsR1 = !this.showResultsR1;
        this.questions = [];
        this.nomeTopico = 'Aguarde seus resultados';
        this.txtCarregando = 'Estamos preparando seus resultados..enquanto isso preencha as informações abaixo!'
      } else {
        this.showResultsR1 = false;
      }
    } else {
      if (last.id === id) {
        this.questions = [];
        localStorage.setItem('questoesR1', JSON.stringify(this.questoesGerais));
        localStorage.setItem('categorias', JSON.stringify(this.categoriasGerais));
        this.rotaNavegacao.navigate(['/resultados', this.idSexo]);

      } else {
        this.showResultsR1 = false;
      }
    }
  }



  nextQuestion(pergunta, resposta) {
    window.scrollTo(0, 300);
    this.questoesGerais.push({
      questaoId: pergunta.id,
      respostaId: resposta.id
    });

    this.categoriasGerais.push({
      id: resposta.mpCategoriaId
    });

    this.next++;
    this.previous++;

    if (this.previous < this.questions.length) {
      if (this.questions[this.previous].hasOwnProperty('mpCategoria')) {
        this.bannerCategoria = this.questions[this.previous].mpCategoria.banner;
        this.icone = this.questions[this.previous].mpCategoria.icone;
      } else {
        this.bannerCategoria = 'assets/imgs/bannerR1.jpg';
      }

      this.nomeTopico = this.questions[this.previous].mpTopico.titulo;
    }
    this.perguntaSelecionado = this.previous;

    this.showResults(pergunta.id);
  }

  previousQuestion() {
    if (this.previous > 0) {
      this.next--;
      this.previous--;
      this.perguntaSelecionado = this.previous;
    }
  }
  btnAjuda = () => this.modalService.showModal();
}
