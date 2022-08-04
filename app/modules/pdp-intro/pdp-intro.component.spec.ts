import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpIntroComponent } from './pdp-intro.component';

describe('PdpIntroComponent', () => {
  let component: PdpIntroComponent;
  let fixture: ComponentFixture<PdpIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdpIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
