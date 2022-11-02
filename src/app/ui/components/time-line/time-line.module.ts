import { NgModule, Output } from '@angular/core';
import { TimeLineComponent } from './time-line.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TimeLineComponent],
  imports: [CommonModule],
  exports: [TimeLineComponent]
})
export class TimeLineModule {
  constructor() {}

}
