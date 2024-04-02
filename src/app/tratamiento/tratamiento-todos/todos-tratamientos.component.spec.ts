import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosTratamientosComponent } from './todos-tratamientos.component';

describe('TodosTratamientosComponent', () => {
  let component: TodosTratamientosComponent;
  let fixture: ComponentFixture<TodosTratamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosTratamientosComponent]
    });
    fixture = TestBed.createComponent(TodosTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
