import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector:'multi-ajuda',
    templateUrl:'./ajuda.component.html',
    styleUrls:['./ajuda.component.scss']
})
export class AjudaComponent {
    @ViewChild('boxAjuda') boxAjuda: ElementRef;
    constructor(){

    }

    ngOnInit(){
        
    }

    ngAfterViewInit(){
    }

    AddClass(){
        if(this.boxAjuda.nativeElement.className == 'showBox'){
        this.boxAjuda.nativeElement.className = 'boxAjuda'
        }
        else {
            this.boxAjuda.nativeElement.className = 'showBox' 
        }
    }
}