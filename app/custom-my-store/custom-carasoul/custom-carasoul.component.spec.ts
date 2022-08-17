import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCarasoulComponent } from './custom-carasoul.component';

describe('CustomCarasoulComponent', () => {
  let component: CustomCarasoulComponent;
  let fixture: ComponentFixture<CustomCarasoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCarasoulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCarasoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
