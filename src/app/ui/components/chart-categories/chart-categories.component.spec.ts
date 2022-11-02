import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCategoriesComponent } from './chart-categories.component';

describe('ChartCategoriesComponent', () => {
  let component: ChartCategoriesComponent;
  let fixture: ComponentFixture<ChartCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
