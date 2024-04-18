import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrogaDetailComponent } from './droga-detail.component';

describe('DrogaDetailComponent', () => {
  let component: DrogaDetailComponent;
  let fixture: ComponentFixture<DrogaDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrogaDetailComponent]
    });
    fixture = TestBed.createComponent(DrogaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
