import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartQuickOrderFormComponent } from './cart-quick-order-form.component';

describe('CartQuickOrderFormComponent', () => {
  let component: CartQuickOrderFormComponent;
  let fixture: ComponentFixture<CartQuickOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartQuickOrderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartQuickOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
