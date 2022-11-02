import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'multi-timeline',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {

  classObject = 'styleMasculino';

  @Input() perguntaSelecionado: number;

  @Input() qtdPerguntas;

  @Output() ajuda = new EventEmitter();

  @Output() voltar = new EventEmitter();


  constructor(private route: Router) { }

  showAjuda() {
    this.ajuda.emit('click ajuda');
  }



  ngOnInit() {
    let sexo = '1';
    if (localStorage.getItem('sexo')) {
      sexo = localStorage.getItem('sexo');

      if (sexo === '1') {
        this.classObject = 'styleMasculino';
      } else {
        this.classObject = 'styleFeminino';
      }
    } else {
      this.route.navigate(['/escolha']);
    }
  }
}
