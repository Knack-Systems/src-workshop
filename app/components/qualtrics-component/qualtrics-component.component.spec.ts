import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualtricsComponentComponent } from './qualtrics-component.component';

describe('QualtricsComponentComponent', () => {
  let component: QualtricsComponentComponent;
  let fixture: ComponentFixture<QualtricsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualtricsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualtricsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
