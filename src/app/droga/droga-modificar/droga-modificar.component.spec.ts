import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrogaModificarComponent } from './droga-modificar.component';

describe('DrogaModificarComponent', () => {
  let component: DrogaModificarComponent;
  let fixture: ComponentFixture<DrogaModificarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrogaModificarComponent]
    });
    fixture = TestBed.createComponent(DrogaModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
