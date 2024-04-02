import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTodosComponent } from './cliente-todos.component';

describe('ClienteTodosComponent', () => {
  let component: ClienteTodosComponent;
  let fixture: ComponentFixture<ClienteTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteTodosComponent]
    });
    fixture = TestBed.createComponent(ClienteTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
