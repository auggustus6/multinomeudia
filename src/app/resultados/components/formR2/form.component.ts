import { OnInit, Component, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'multi-formR2',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  @Output() clickBotao = new EventEmitter();

  formR2Group: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inicializarForm();
  }

 enviarForm(form){
   this.clickBotao.emit(form);
 }

  inicializarForm() {
    this.formR2Group = this.fb.group({
      dataNasc: ['', [Validators.required]],
      altura: ['', [Validators.required]],
      peso: ['', [Validators.required]]
    })
  }

  get f() { return this.formR2Group.controls; }
}
