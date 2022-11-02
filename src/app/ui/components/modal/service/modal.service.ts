import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public fadeModal = new Subject<boolean>();

  showModal(): Observable<boolean> {
    this.fadeModal.next(false);
    return this.fadeModal;
  }

  hideModal(): Observable<boolean> {
    this.fadeModal.next(true);
    return this.fadeModal;
  }

}
