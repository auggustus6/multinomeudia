import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const _window:any = window;

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.component.html',
  styleUrls: ['./escolha.component.scss']
})
export class EscolhaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  escolherSexo(idSexo){
    if(idSexo == 1){
      this.router.navigate(['/questoes', idSexo])
     _window.gtag('event', 'click', { 'event_category': 'Button', 'event_label': 'Homem' });
    }
    else {
      this.router.navigate(['/questoes', idSexo]);
      _window.gtag('event', 'click', { 'event_category': 'Button', 'event_label': 'Mulher' });
    }
  }

}
