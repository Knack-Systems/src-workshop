import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductIntroComponent } from './new-product-intro.component';

describe('NewProductIntroComponent', () => {
  let component: NewProductIntroComponent;
  let fixture: ComponentFixture<NewProductIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
