import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrosValidacaoComponent } from './erros-validacao.component';

describe('ErrosValidacaoComponent', () => {
  let component: ErrosValidacaoComponent;
  let fixture: ComponentFixture<ErrosValidacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrosValidacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrosValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
