import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'multi-form-r1',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponentResultado implements OnInit {

  @Input() formR2 = false;

  @Output() clickBotao = new EventEmitter();

  leadForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inicializarForm();
  }

  enviarForm = (leadForm) => this.clickBotao.emit(leadForm);

  inicializarForm() {
    this.leadForm = this.fb.group({
      nome: ['', [Validators.required]],
      whatsapp: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      sexo: [localStorage.getItem('sexo')]
    });

    this.leadForm.addControl('mpLeadResposta', this.fb.array([]));

    let questoesGerais = [];
    const questoesR1 = JSON.parse(localStorage.getItem('questoesR1'));
    const questoesR2 = JSON.parse(localStorage.getItem('questoesR2'));

    questoesGerais = [...questoesR1, ...questoesR2];

    const formQuestoes = this.leadForm.get('mpLeadResposta') as FormArray;

    questoesGerais.forEach(questao => {
      formQuestoes.push(this.fb.group({
        mpQuestaoId: questao.questaoId,
        mpRespostaId: questao.respostaId
      }));
    });
  }

  get f() { return this.leadForm.controls; }
}

