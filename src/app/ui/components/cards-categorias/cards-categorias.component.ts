import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'multi-cards-categorias',
  templateUrl: './cards-categorias.component.html',
  styleUrls: ['./cards-categorias.component.scss']
})
export class CardsCategoriasComponent implements OnInit {
  @Input() nameCategory: string;
  @Input() descriptionLong: string;
  @Input() descriptionShort: string;
  @Input() urlImage;

  @Input() percent: string;

  constructor() {}

  ngOnInit() {}
}
