import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrogaFormComponent } from './droga-form.component';

describe('DrogaFormComponent', () => {
  let component: DrogaFormComponent;
  let fixture: ComponentFixture<DrogaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrogaFormComponent]
    });
    fixture = TestBed.createComponent(DrogaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
