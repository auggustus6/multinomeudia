import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'multi-carregando',
  templateUrl: './carregando.component.html',
  styleUrls: ['./carregando.component.scss']
})
export class CarregandoComponent implements OnInit {

  @Input() txtCarregando: string;

  // txtCarregando = ['Carregando', 'Buscando informações sobre a nutrição', 'Carregando suas respostas', 'Aguarde mais um instante...']
  // textos2:string;

  constructor() { }

  ngOnInit() {
    // this.aparecerMensagens()
  }

  // aparecerMensagens(){
  //  let count = 0;
  //  this.textos2 = this.textos[count];

  //   setInterval(e=>{
  //   if(count <= this.textos.length){
  //     count++
  //     this.textos2 = this.textos[count];
  //   } else {
  //     count = 0;
  //     this.textos2 = this.textos[0];
  //   }
  //   },3000)
  // }
}
