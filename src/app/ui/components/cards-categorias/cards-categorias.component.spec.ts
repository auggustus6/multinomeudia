import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCategoriasComponent } from './cards-categorias.component';

describe('CardsCategoriasComponent', () => {
  let component: CardsCategoriasComponent;
  let fixture: ComponentFixture<CardsCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
