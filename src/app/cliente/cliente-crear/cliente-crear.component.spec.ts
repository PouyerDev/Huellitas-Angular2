import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCrearComponent } from './cliente-crear.component';

describe('ClienteCrearComponent', () => {
  let component: ClienteCrearComponent;
  let fixture: ComponentFixture<ClienteCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteCrearComponent]
    });
    fixture = TestBed.createComponent(ClienteCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
