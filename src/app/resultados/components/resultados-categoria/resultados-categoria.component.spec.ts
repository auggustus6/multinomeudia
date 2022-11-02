import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosCategoriaComponent } from './resultados-categoria.component';

describe('ResultadosCategoriaComponent', () => {
  let component: ResultadosCategoriaComponent;
  let fixture: ComponentFixture<ResultadosCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
