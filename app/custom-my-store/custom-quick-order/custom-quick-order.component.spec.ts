import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomQuickOrderComponent } from './custom-quick-order.component';

describe('CustomQuickOrderComponent', () => {
  let component: CustomQuickOrderComponent;
  let fixture: ComponentFixture<CustomQuickOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomQuickOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomQuickOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
