import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCartQuickComponent } from './custom-cart-quick.component';

describe('CustomCartQuickComponent', () => {
  let component: CustomCartQuickComponent;
  let fixture: ComponentFixture<CustomCartQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCartQuickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCartQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
