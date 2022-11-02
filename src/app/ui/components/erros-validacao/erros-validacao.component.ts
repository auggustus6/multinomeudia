import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'multi-erros-validacao',
  templateUrl: './erros-validacao.component.html',
  styleUrls: ['./erros-validacao.component.scss']
})
export class ErrosValidacaoComponent implements OnInit {

  @Input() labelTxt: string;
  constructor() { }

  ngOnInit() {
  }

}
