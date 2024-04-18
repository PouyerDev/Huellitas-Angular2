import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoTodosComponent } from './tratamiento-todos.component';

describe('TratamientoTodosComponent', () => {
  let component: TratamientoTodosComponent;
  let fixture: ComponentFixture<TratamientoTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientoTodosComponent]
    });
    fixture = TestBed.createComponent(TratamientoTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
