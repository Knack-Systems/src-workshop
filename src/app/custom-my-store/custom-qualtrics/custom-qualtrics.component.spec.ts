import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomQualtricsComponent } from './custom-qualtrics.component';

describe('CustomQualtricsComponent', () => {
  let component: CustomQualtricsComponent;
  let fixture: ComponentFixture<CustomQualtricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomQualtricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomQualtricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
