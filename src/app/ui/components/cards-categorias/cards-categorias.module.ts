import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsCategoriasComponent } from './cards-categorias.component';
import { ChartCategoriesModule } from "../chart-categories/chart-categories.module";

@NgModule({
  declarations: [CardsCategoriasComponent],
  imports: [CommonModule, ChartCategoriesModule],
  exports: [CardsCategoriasComponent]
})
export class CardsCategoriasModule {}
