import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomQualraticsComponent } from './custom-qualratics.component';

describe('CustomQualraticsComponent', () => {
  let component: CustomQualraticsComponent;
  let fixture: ComponentFixture<CustomQualraticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomQualraticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomQualraticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
