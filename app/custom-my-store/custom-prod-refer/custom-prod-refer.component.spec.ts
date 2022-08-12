import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProdReferComponent } from './custom-prod-refer.component';

describe('CustomProdReferComponent', () => {
  let component: CustomProdReferComponent;
  let fixture: ComponentFixture<CustomProdReferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProdReferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProdReferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
