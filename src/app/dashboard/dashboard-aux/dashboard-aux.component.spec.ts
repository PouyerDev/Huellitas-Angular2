import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAuxComponent } from './dashboard-aux.component';

describe('DashboardAuxComponent', () => {
  let component: DashboardAuxComponent;
  let fixture: ComponentFixture<DashboardAuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAuxComponent]
    });
    fixture = TestBed.createComponent(DashboardAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
