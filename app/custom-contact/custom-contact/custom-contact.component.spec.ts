import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomContactComponent } from './custom-contact.component';

describe('CustomContactComponent', () => {
  let component: CustomContactComponent;
  let fixture: ComponentFixture<CustomContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
