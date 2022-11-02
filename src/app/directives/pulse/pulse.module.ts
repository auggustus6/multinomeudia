import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PulseDirective } from './pulse.directive';

@NgModule({
  declarations: [PulseDirective],
  imports: [CommonModule],
  exports: [PulseDirective]
})
export class PulseModule {}
