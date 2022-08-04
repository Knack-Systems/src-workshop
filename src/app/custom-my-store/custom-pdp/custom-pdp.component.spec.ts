import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPdpComponent } from './custom-pdp.component';

describe('CustomPdpComponent', () => {
  let component: CustomPdpComponent;
  let fixture: ComponentFixture<CustomPdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPdpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
