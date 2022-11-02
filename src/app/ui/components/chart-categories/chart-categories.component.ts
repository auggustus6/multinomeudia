import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'multi-chart-categories',
  templateUrl: './chart-categories.component.html',
  styleUrls: ['./chart-categories.component.scss']
})
export class ChartCategoriesComponent implements OnInit {

  @Input() percent:string;

  constructor() { }

  ngOnInit() {
  }

}
