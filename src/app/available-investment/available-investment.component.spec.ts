import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableInvestmentComponent } from './available-investment.component';

describe('AvailableInvestmentComponent', () => {
  let component: AvailableInvestmentComponent;
  let fixture: ComponentFixture<AvailableInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableInvestmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
