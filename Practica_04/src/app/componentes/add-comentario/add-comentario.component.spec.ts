import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComentarioComponent } from './add-comentario.component';

describe('AddComentarioComponent', () => {
  let component: AddComentarioComponent;
  let fixture: ComponentFixture<AddComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
