import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ModalService } from "./ui/components/modal/service/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showCookies = true;
  rotaEscolha;
  constructor(private route: Router, private modalService: ModalService) { }

  ngOnInit() {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.route.url;

        if (url === '/escolha') {
          this.rotaEscolha = false;
        } else {
          this.rotaEscolha = true;
        }
      }
    });
  }

  aceitar = (event) => {this.showCookies = !event;}

  termosCookies = () => {
    this.modalService.showModal();
  }
}
