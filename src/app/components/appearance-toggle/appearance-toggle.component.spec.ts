import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearanceToggleComponent } from './appearance-toggle.component';

describe('AppearanceToggleComponent', () => {
  let component: AppearanceToggleComponent;
  let fixture: ComponentFixture<AppearanceToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppearanceToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppearanceToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
