import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'multi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() showCookies:boolean;

  @Output() saibaCookies = new EventEmitter();

  @Output() aceitarCookies = new EventEmitter();

  constructor() {}
}
