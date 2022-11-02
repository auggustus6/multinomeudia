import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BannerTopicoComponent } from "./banner-topicos.component";
import { PulseModule } from "src/app/directives/pulse/pulse.module";

@NgModule({
  declarations: [BannerTopicoComponent],
  imports: [CommonModule, PulseModule],
  exports: [BannerTopicoComponent]
})

export class BannerTopicoModule { }
