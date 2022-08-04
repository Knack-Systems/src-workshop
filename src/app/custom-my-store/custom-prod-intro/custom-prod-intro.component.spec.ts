import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProdIntroComponent } from './custom-prod-intro.component';

describe('CustomProdIntroComponent', () => {
  let component: CustomProdIntroComponent;
  let fixture: ComponentFixture<CustomProdIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProdIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProdIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
