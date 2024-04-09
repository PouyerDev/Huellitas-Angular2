import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioTodosComponent } from './veterinario-todos.component';

describe('VeterinarioTodosComponent', () => {
  let component: VeterinarioTodosComponent;
  let fixture: ComponentFixture<VeterinarioTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarioTodosComponent]
    });
    fixture = TestBed.createComponent(VeterinarioTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
