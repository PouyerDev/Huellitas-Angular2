import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrogaCrearComponent } from './droga-crear.component';

describe('DrogaCrearComponent', () => {
  let component: DrogaCrearComponent;
  let fixture: ComponentFixture<DrogaCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrogaCrearComponent]
    });
    fixture = TestBed.createComponent(DrogaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
