import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickOrderSectionComponent } from './quick-order-section.component';

describe('QuickOrderSectionComponent', () => {
  let component: QuickOrderSectionComponent;
  let fixture: ComponentFixture<QuickOrderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickOrderSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickOrderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
