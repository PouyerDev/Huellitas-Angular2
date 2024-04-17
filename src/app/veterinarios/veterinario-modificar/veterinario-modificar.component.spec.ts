import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioModificarComponent } from './veterinario-modificar.component';

describe('VeterinarioModificarComponent', () => {
  let component: VeterinarioModificarComponent;
  let fixture: ComponentFixture<VeterinarioModificarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarioModificarComponent]
    });
    fixture = TestBed.createComponent(VeterinarioModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
