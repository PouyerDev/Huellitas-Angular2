import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoMascotaComponent } from './tratamiento-mascota.component';

describe('TratamientoMascotaComponent', () => {
  let component: TratamientoMascotaComponent;
  let fixture: ComponentFixture<TratamientoMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientoMascotaComponent]
    });
    fixture = TestBed.createComponent(TratamientoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
