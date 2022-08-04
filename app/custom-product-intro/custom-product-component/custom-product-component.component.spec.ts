import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductComponentComponent } from './custom-product-component.component';

describe('CustomProductComponentComponent', () => {
  let component: CustomProductComponentComponent;
  let fixture: ComponentFixture<CustomProductComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
