import {
  Component,
  Input,
  SimpleChanges,
  OnChanges,
  OnInit,
  SimpleChange
} from '@angular/core';
import { ModalService } from './service/modal.service';

@Component({
  selector: 'multi-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() contentBody: string;

  @Input() fadeModal = true;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.showModal();
  }

  showModal() {
    this.modalService.fadeModal.subscribe(modal => {
      this.fadeModal = modal;
      console.log(modal);
    });
  }
  hideModal() {
    this.modalService.hideModal().subscribe(modal => {
      this.fadeModal = modal;
      console.log(modal);
    });
  }
}
