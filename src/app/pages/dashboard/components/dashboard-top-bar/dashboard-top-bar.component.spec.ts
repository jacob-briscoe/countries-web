import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopBarComponent } from './dashboard-top-bar.component';

describe('DashboardTopBarComponent', () => {
  let component: DashboardTopBarComponent;
  let fixture: ComponentFixture<DashboardTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTopBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
