import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStarratingComponent } from './custom-starrating.component';

describe('CustomStarratingComponent', () => {
  let component: CustomStarratingComponent;
  let fixture: ComponentFixture<CustomStarratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomStarratingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStarratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
