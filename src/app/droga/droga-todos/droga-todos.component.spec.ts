import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrogaTodosComponent } from './droga-todos.component';

describe('DrogaTodosComponent', () => {
  let component: DrogaTodosComponent;
  let fixture: ComponentFixture<DrogaTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrogaTodosComponent]
    });
    fixture = TestBed.createComponent(DrogaTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
