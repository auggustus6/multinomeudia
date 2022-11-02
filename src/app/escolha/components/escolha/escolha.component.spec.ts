import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaComponent } from './escolha.component';

describe('EscolhaComponent', () => {
  let component: EscolhaComponent;
  let fixture: ComponentFixture<EscolhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
