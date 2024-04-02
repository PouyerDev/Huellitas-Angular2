import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoModificarComponent } from './tratamiento-modificar.component';

describe('TratamientoModificarComponent', () => {
  let component: TratamientoModificarComponent;
  let fixture: ComponentFixture<TratamientoModificarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientoModificarComponent]
    });
    fixture = TestBed.createComponent(TratamientoModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
