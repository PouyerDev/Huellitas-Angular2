import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoCrearComponent } from './tratamiento-crear.component';

describe('TratamientoCrearComponent', () => {
  let component: TratamientoCrearComponent;
  let fixture: ComponentFixture<TratamientoCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientoCrearComponent]
    });
    fixture = TestBed.createComponent(TratamientoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
