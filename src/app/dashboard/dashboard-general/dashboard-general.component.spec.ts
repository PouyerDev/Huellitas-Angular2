import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGeneralComponent } from './dashboard-general.component';

describe('DashboardGeneralComponent', () => {
  let component: DashboardGeneralComponent;
  let fixture: ComponentFixture<DashboardGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardGeneralComponent]
    });
    fixture = TestBed.createComponent(DashboardGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
