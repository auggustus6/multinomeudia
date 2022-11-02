import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'multi-banner-topico',
  templateUrl: './banner-topicos.component.html',
  styleUrls: ['./banner-topicos.component.scss']
})

export class BannerTopicoComponent implements OnInit {

  classObject = '1';

  @Input() backgroundImage;

  @Input() icone;

  @Input() nomeTopico: string;

  constructor() { }


  ngOnInit() {
    const sexo = localStorage.getItem('sexo');
    if (sexo === '1') {
      this.classObject = 'styleMasculino';
    } else {
      this.classObject = 'styleFeminino';
    }
  }


}
