import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpProductSummaryComponent } from './pdp-product-summary.component';

describe('PdpProductSummaryComponent', () => {
  let component: PdpProductSummaryComponent;
  let fixture: ComponentFixture<PdpProductSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdpProductSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpProductSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
