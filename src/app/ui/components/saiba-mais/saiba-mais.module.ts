import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SaibaMaisComponent } from './saiba-mais.component';

@NgModule({
    imports:[CommonModule],
    declarations:[SaibaMaisComponent],
    exports:[SaibaMaisComponent]
})
export class SaibaMaisModule {}