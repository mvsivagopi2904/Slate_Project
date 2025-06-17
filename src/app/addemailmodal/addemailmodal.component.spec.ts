import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemailmodalComponent } from './addemailmodal.component';

describe('AddemailmodalComponent', () => {
  let component: AddemailmodalComponent;
  let fixture: ComponentFixture<AddemailmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddemailmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddemailmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
