import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioCrearComponent } from './veterinario-crear.component';

describe('VeterinarioCrearComponent', () => {
  let component: VeterinarioCrearComponent;
  let fixture: ComponentFixture<VeterinarioCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarioCrearComponent]
    });
    fixture = TestBed.createComponent(VeterinarioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
