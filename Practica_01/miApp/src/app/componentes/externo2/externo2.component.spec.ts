import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Externo2Component } from './externo2.component';

describe('Externo2Component', () => {
  let component: Externo2Component;
  let fixture: ComponentFixture<Externo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Externo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Externo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
