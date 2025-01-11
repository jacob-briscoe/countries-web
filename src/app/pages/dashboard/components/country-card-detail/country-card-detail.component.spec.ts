import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCardDetailComponent } from './country-card-detail.component';

describe('CountryCardDetailComponent', () => {
  let component: CountryCardDetailComponent;
  let fixture: ComponentFixture<CountryCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryCardDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
